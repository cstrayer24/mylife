"use client";
import React, { useState } from "react";

import baseData from "@/types/userBaseData";
import Nav from "../Nav";
export default function MainLayout({
  data,
  children,
}: {
  data: baseData;
  children?: React.ReactNode | React.ReactNode[];
}) {
  const { info, diet, mental, physical } = data;
  return (
    <div className=" w-screen h-screen grid grid-cols-3 font-serif">
      <div className=" col-span-1 overflow-hidden">
        <Nav userInfo={info} />
      </div>

      <div className=" col-span-2 overflow-y-scroll">{children}</div>
    </div>
  );
}
