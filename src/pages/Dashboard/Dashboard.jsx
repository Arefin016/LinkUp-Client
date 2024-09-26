import React from "react";
import { FaUsers } from "react-icons/fa6";
import { CiBookmark, CiBookmarkCheck, CiBookmarkRemove } from "react-icons/ci";
const Dashboard = () => {
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
        <div className="flex gap-5">
          <div className="flex flex-col items-center">
            <figure>
              <img
                className="w-44 rounded-lg"
                src="https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM="
                alt=""
              />
            </figure>
            <div className="mt-2">
              <h3 className="font-semibold">MD. HAMIM</h3>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <figure>
              <img
                className="w-44 rounded-lg"
                src="https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM="
                alt=""
              />
            </figure>
            <div className="mt-2">
              <h3 className="font-semibold">MD. HAMIM</h3>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <figure>
              <img
                className="w-44 rounded-lg"
                src="https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM="
                alt=""
              />
            </figure>
            <div className="mt-2">
              <h3 className="font-semibold">MD. HAMIM</h3>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <figure>
              <img
                className="w-44 rounded-lg"
                src="https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM="
                alt=""
              />
            </figure>
            <div className="mt-2">
              <h3 className="font-semibold">MD. HAMIM</h3>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <figure>
              <img
                className="w-44 rounded-lg"
                src="https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM="
                alt=""
              />
            </figure>
            <div className="mt-2">
              <h3 className="font-semibold">MD. HAMIM</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
