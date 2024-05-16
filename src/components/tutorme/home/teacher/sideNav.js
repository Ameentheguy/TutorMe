import React from 'react';

export function sideNav() {
  return (
    <div>
      {/* Your sidebar content goes here */}
    </div>
  );
}

"use client";

import Link from "next/link";
import React from "react";

//to do list
import { BsListCheck } from "react-icons/bs";
//bin
import { BsTrash } from "react-icons/bs";
//archive

import { BsArchive } from "react-icons/bs";
//inbox
import { BsInbox } from "react-icons/bs";

import { MdOutlineArchive } from "react-icons/md";
//current
import { IoFileTrayFullOutline } from "react-icons/io5";

import { MdDashboard } from "react-icons/md";




const SideButton = (props) => {
  return (
    <div
      className="flex flex-row ml-[4%] h-[100] mr-[5%]"
    >
      <Link href={props.theLink}
        className="flex gap-2 items-center flex-row rounded-lg mt-[3%] transition duration-150 hover:bg-slate-200 shadow w-full h-[4vh] "
        >
        <props.theIcon className="ml-[2vh]" />
        {props.theName}
      </Link>
    </div>
  )
}

const sideNav = () => {
  return (
    <div className="flex-col mt-[3%] h-full">
      <SideButton theName="to do list" theIcon={MdDashboard} theLink="/teacher/dashboard"/>
      <SideButton theName="bin" theIcon={BsTrash} theLink="/teacher/pastRequest"/>
     

    </div>
  )
}



export default sideBar;