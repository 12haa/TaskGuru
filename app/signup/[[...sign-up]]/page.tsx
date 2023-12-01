"use client";
// @ts-ignore
import React from "react";
// @ts-ignore
import {SignUp} from "@clerk/nextjs";

// @ts-ignore
function Page() {
  return (
    <div className="flex items-center justify-center h-full">
      <SignUp />
    </div>
  );
}

// TODO 1:36:50
// @ts-ignore
export default Page;
