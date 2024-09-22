import React from "react";
import { useState, useEffect } from "react";
import { CodforcesInfo } from "./Fetch";
import  animation from '../animation.json';
import { Player } from '@lottiefiles/react-lottie-player';
import axios from "axios";

const Allusers = () => {
  const [data, setData] = useState([]);
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
      async function fetchFromDb() {
        setLoading(true);
        try {
          const res = await axios.get('http://localhost:8900/show');
          setInfo(res.data); 
          console.log(res.data);
        } 
        catch (err) {
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
    


  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-[5%]  bg-slate-200 h-full w-full">
      <div className="p-3 flex flex-wrap gap-4 items-center justify-center">
        {
         
        loading ? (<Player src={animation} loop className="player"  autoplay style={{ height: '300px', width: '300px' }}  />):
        (
          data.map((info, index) => (
            <div
              key={index}
              className="flex flex-col p-4 border bg-white rounded-xl border-gray-300 font-mono w-64 h-80 md:w-64 md:h-80"
            >
              <div className="mb-4 w-full h-40 flex justify-center">
                <img
                  src={`${info.avatar}`}
                  className="w-32 h-32 border rounded-full object-cover"
                  alt="avatar"
                />
              </div>
          
              <p className="text-sm text-center">Handle: {info.handle}</p>
              <p className="text-md text-center">Rating: {info.rating}</p>
              <p className="text-md text-center">Max Rating: {info.maxRating}</p>
              <p className="text-md text-center">Rank: {info.rank}</p>
            </div>
          ))
          
        )
        
        }
      </div>
    </div>
  );
};

export default Allusers;
