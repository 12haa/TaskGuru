"use client";
import React from "react";
import { useGlobalState } from "@/app/context/globalContextProvider";
import Tasks from "@/app/components/Tasks/Tasks";

const Page = () => {
  const { incompleteTasks } = useGlobalState();
  return <Tasks title="Incompleted Tasks" tasks={incompleteTasks} />;
};
export default Page;
