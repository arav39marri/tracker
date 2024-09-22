import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Show.css";
import { FaSort } from "react-icons/fa";
import Lottie from "react-lottie";
import { CodforcesInfo } from "./Fetch";
import animation from "../animation.json";
import { Player } from "@lottiefiles/react-lottie-player";

const Show = () => {
  const [table, setTable] = useState(false);
  const [Namet, toggleName] = useState(false);
  const [rankt, toggleRank] = useState(false);
  const [ratingt, toggleRating] = useState(false);
  const [handlet, toggleHandle] = useState(false);
  const [error, setError] = useState(null);

  const [data, setData] = useState([]);
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFromDb() {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:8900/show");
        setInfo(res.data);
        console.log(res.data);
      } catch (err) {
        console.log("Error in fetching data", err);
      }
    }
    fetchFromDb();
  }, []);

  useEffect(() => {
    async function fetchCodeforcesData() {
      if (info.length === 0) {
        setLoading(false);
        return;
      }

      try {
        const results = [];

        for (const ele of info) {
          const curr = ele.handle;
          try {
            const res = await axios.get(
              `https://codeforces.com/api/user.info?handles=${curr}&checkHistoricHandles=false`
            );
            const mergedData = {
              ...res.data.result[0],
              name: ele.name,
              createdAt: ele.createdAt,
            };
            results.push(mergedData);
          } catch (error) {
            console.log("Error in fetching data from Codeforces API", error);
          }
        }

        setData(results);
      } catch (err) {
        console.log("Error in fetching Codeforces data", err);
      } finally {
        setLoading(false);
      }
    }

    if (info.length > 0) {
      fetchCodeforcesData();
    }
  }, [info]);

  const SortName = () => {
    const sortedData = [...data].sort((a, b) => {
      if (Namet) return b.name.localeCompare(a.name);
      if (!Namet) return a.name.localeCompare(b.name);
    });
    setData(sortedData);
    toggleName((Namet) => !Namet);
  };
  const SortRating = () => {
    const sortedData = [...data].sort((a, b) => {
      if (ratingt) return b.rating - a.rating;
      if (!ratingt) return a.rating - b.rating;
    });
    setData(sortedData);
    toggleRating((ratingt) => !ratingt);
  };

  return (
    <div className="pl-16  flex flex-col gap-8">
     
     <div className="flex text-4xl    justify-center font-bold ">
        <p>Leader Board</p>
      </div>

      {loading ? (
        <Player
          src={animation}
          loop
          className="player"
          autoplay
          style={{ height: "300px", width: "300px" }}
        />
      ) :
       (
         <div className="overflow-auto">
         <table className=" border border-black sm:text-lg text-sm">
          <thead className="bg-slate-600 text-white">
            <tr>
              <th
                onClick={() => SortName()}
                className="sticky left-0 bg-slate-600  border-r border-black"
              >
                SNo
              </th>
              <th
                onClick={() => SortName()}
                className="sticky left-12 bg-slate-600  border-r border-black"
              >
                Name
              </th>
              <th className="border-r border-black">Handle</th>
              <th className="border-r border-black">Rank</th>
              <th onClick={() => SortRating()}>
                <div className="flex justify-center">Rating <FaSort /></div>
              </th>
              <th>Last seen</th>
            </tr>
          </thead>
          <tbody>
            {data.map((ele, index) => (
              <tr
                key={index}
                className={`${index % 2 ? 'bg-slate-50' : 'bg-slate-200'} border-black`}
              >
                <td className="text-center sticky left-0 bg-slate-50 border-r border-black  ">
                  {index + 1}
                </td>
                <td className="text-center sticky left-12 bg-slate-50 border-r border-black ">
                  {ele.name}
                </td>
                <td className="text-center border-r border-black">{ele.handle}</td>
                <td className="text-center border-r border-black">{ele.rank}</td>
                <td className="text-center border-r border-black">{ele.rating}</td>
                <td className="text-center">
                  {Math.floor((Date.now() - ele.lastOnlineTimeSeconds * 1000) / (1000 * 60 * 60)) === 0
                    ? 'online'
                    : Math.floor((Date.now() - ele.lastOnlineTimeSeconds * 1000) / (1000 * 60 * 60)) < 23
                    ? Math.floor((Date.now() - ele.lastOnlineTimeSeconds * 1000) / (1000 * 60 * 60)) + ' hours ago'
                    : Math.floor((Date.now() - ele.lastOnlineTimeSeconds * 1000) / (1000 * 60 * 60 * 24 * 365)) === 0
                    ? Math.floor((Date.now() - ele.lastOnlineTimeSeconds * 1000) / (1000 * 60 * 60 * 24)) + ' days ago'
                    : Math.floor((Date.now() - ele.lastOnlineTimeSeconds * 1000) / (1000 * 60 * 60 * 24 * 365)) + ' years ago'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
          
     )
   
     }
      </div>
   )
}

export default Show;
