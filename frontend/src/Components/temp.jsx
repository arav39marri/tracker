// import React, { useState, useEffect } from "react";
// import axios from "axios";
// const Arr = [];

// const setData = () => {
    
//   const [info, setInfo] = useState([]);
//   const [codeforcesData, setCodeforcesData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8900/show")
//       .then((res) => {
//         setInfo(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         setError("Error fetching user data");
//         setLoading(false);
//       });
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       const results = [];

//       for (const ele of info) {
//         const curr = ele.handle;
//         try {
//           const res = await axios.get(
//             `https://codeforces.com/api/user.info?handles=${curr};&checkHistoricHandles=false`
//           );
//           const mergedData = {
//             ...res.data.result[0],
//             name: ele.name,
//             createdAt: ele.createdAt,
//           };
//           results.push(mergedData);
//         } catch (error) {
//           console.error(`Failed to fetch data for ${curr}:`, error);
//         }
//       }

//       setCodeforcesData(results);
//     };

//     fetchData();
//     setTable(true);
//     Arr = [...Arr, ...codeforcesData]; //]
//   }, [info]);
// };

// setData();
// export const Info = Arr;
// ------------------------------------------------------
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Code } from "mongodb";
// const Arr = [];

// export const setData = async () => {
    
// const [info, setInfo] = useState([]);
// const [codeforcesData, setCodeforcesData] = useState([]);


//    await axios
//     .get("http://localhost:8900/show")
//     .then((res) => {
//         setInfo(res.data);
//         setLoading(false);
//     })
//     .catch((err) => {
//         console.error(err);
//         setError("Error fetching user data");
//         setLoading(false);
//     });


// useEffect(() => {
//     const fetchData = async () => {
//     const results = [];

//     for (const ele of info) {
//         const curr = ele.handle;
//         try {
//         const res = await axios.get(
//             `https://codeforces.com/api/user.info?handles=${curr};&checkHistoricHandles=false`
//         );
//         const mergedData = {
//             ...res.data.result[0],
//             name: ele.name,
//             createdAt: ele.createdAt,
//         };
//         results.push(mergedData);
//         } catch (error) {
//         console.error(`Failed to fetch data for ${curr}:`, error);
//         }
//     }

//     setCodeforcesData(results);
//     };

//     fetchData();
//     setTable(true);
//     Arr = [...Arr, ...codeforcesData]; //]
// }, [info]);
// return codeforcesData;
// };

// s
