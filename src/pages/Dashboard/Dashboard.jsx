import React, { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa6";
import { CiBookmark, CiBookmarkCheck, CiBookmarkRemove } from "react-icons/ci";
import useAxiosPublic from "../../hooks/useAxiosPublic";
const Dashboard = () => {
  const axiosPublic=useAxiosPublic()
  const [users,setUsers]=useState([])
  console.log(users)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosPublic.get('/users');
        setUsers(res.data); // Handle the response data
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
  
    fetchData();
  }, []);
  
  return (
    <div className="ml-8">
      <p className="my-3 font-semibold">Dashboard</p>
      <div className="flex gap-5">
        <div className="bg-orange-600 p-5 text-white rounded-lg">
          <div className="flex flex-col justify-center items-center">
            <div className="text-xl font-semibold flex gap-5">
              <h3>CLIENTS</h3>
              <span className="text-2xl">
                <FaUsers></FaUsers>
              </span>
            </div>
            <p className="font-bold">123K+</p>
          </div>
        </div>
        <div className="bg-orange-600 p-5 text-white rounded-lg">
          <div className="flex flex-col justify-center items-center">
            <div className="text-xl font-semibold flex gap-5">
              <h3>Total Booking</h3>
              <span className="text-2xl">
                <CiBookmark></CiBookmark>
              </span>
            </div>
            <p className="font-bold">5436+</p>
          </div>
        </div>
        <div className="bg-orange-600 p-5 text-white rounded-lg">
          <div className="flex flex-col justify-center items-center">
            <div className="text-xl font-semibold flex gap-5">
              <h3>BOOKING CANCEL</h3>
              <span className="text-2xl">
                <CiBookmarkRemove></CiBookmarkRemove>
              </span>
            </div>
            <p className="font-bold">434+</p>
          </div>
        </div>
        <div className="bg-orange-600 p-5 text-white rounded-lg">
          <div className="flex flex-col justify-center items-center">
            <div className="text-xl font-semibold flex gap-5">
              <h3>COMPLETE MEETING</h3>
              <span className="text-2xl">
                <CiBookmarkCheck></CiBookmarkCheck>
              </span>
            </div>
            <p className="font-bold">434+</p>
          </div>
        </div>
      </div>
      <div>
        <p className="my-3 font-semibold">Recently Visited Clients</p>
        <div className="flex flex-wrap gap-5">
          
          
        {/* {
          users.map(user=><div key={user._id} className="flex flex-col items-center">
            <figure>
              <img
                className="w-44 h-36 rounded-lg bg-cover"
                src={user?.img}
                alt=""
              />
            </figure>
            <div className="mt-2">
              <h3 className="font-semibold">{user.name}</h3>
            </div>
          </div>)
        } */}
       {
        users.map(user=> <div key={user._id} className="bg-white rounded-lg p-5 shadow-md w-64 text-center ">
          <div className="rounded-full overflow-hidden w-20 h-20 mx-auto mb-4">
            <img 
              src={user?.img}
              alt="Blanche Pearson" 
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">{user?.name}</h2>
          <p className="text-sm text-gray-500 mb-4">{user?.email}</p>
          <p >Date:{user?.date.split(',')[0]}</p>
          <p >Time:{user?.date.split(',')[1]}</p>
        </div>)
       }
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
