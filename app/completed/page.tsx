"use client";
import React from "react";
import { useGlobalState } from "@/app/context/globalContextProvider";
import Tasks from "@/app/components/Tasks/Tasks";

const Page = () => {
  const { completedTasks } = useGlobalState();
  return <Tasks title="Completed Tasks" tasks={completedTasks} />;
};
export default Page;
