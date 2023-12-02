"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import themes from "./theme";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import toast from "react-hot-toast";

export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const theme = themes[selectedTheme];
  const [tasks, setTasks] = useState([]);

  // GET User
  const { user } = useUser();

  const allTasks = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("/api/tasks");
      console.log(res.data);
      setTasks(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (user) {
      allTasks().then((r) => {
        console.log("Fetched User Data");
      });
    }
  }, [user]);

  const deleteTask = async (id) => {
    try {
      const res = axios.delete(`/api/tasks/${id}`);
      toast.success("Task Deleted Successfully");

      allTasks();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
    allTasks();
  };

  return (
    <GlobalContext.Provider
      value={{ theme, tasks, deleteTask, isLoading, allTasks }}
    >
      <GlobalUpdateContext.Provider value={{}}>
        {children}
      </GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => {
  const context = useContext(GlobalContext);
  return context;
};
