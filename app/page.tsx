"use client";
import Tasks from "@/app/components/Tasks/Tasks";
import { useGlobalState } from "@/app/context/globalContextProvider";

export default function Home() {
  const { tasks } = useGlobalState();

  return (
    <>
      <Tasks tasks={tasks} title="All Tasks" />
    </>
  );
}
