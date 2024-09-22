import axios from "axios";

const Info = [];
const CodforcesInfo = [];

async function fetchData() {
    try {
        const res = await axios.get('http://localhost:8900/show');
        Info.push(...res.data);
    } catch (err) {
        console.log("Error in fetching data", err);
    }
}

async function fetchData1() {
    try {
        const results = [];
        for (const ele of Info) {
            const curr = ele.handle;
            try {
                const res = await axios.get(`https://codeforces.com/api/user.info?handles=${curr}&checkHistoricHandles=false`);
                const mergedData = {
                    ...res.data.result[0],
                    name: ele.name,
                    createdAt: ele.createdAt,
                };
                results.push(mergedData);
            } catch (error) {
                console.log("Error in fetching data", error);
            }
        }
        CodforcesInfo.push(...results);
    } catch (err) {
        console.log("Error in fetchData1", err);
    }
    CodforcesInfo.sort(function (a, b) {
        return b.rating - a.rating;
    })
}

async function main() {
    await fetchData();
    await fetchData1();
    CodforcesInfo.forEach(element => {
        //console.log(element);
    });
}

main();

export { CodforcesInfo };
