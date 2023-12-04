"use client";
import React from "react";
import { useGlobalState } from "@/app/context/globalContextProvider";
import Tasks from "@/app/components/Tasks/Tasks";

const Page = () => {
  const { importantTasks } = useGlobalState();
  return <Tasks title="important tasks" tasks={importantTasks} />;
};
export default Page;
