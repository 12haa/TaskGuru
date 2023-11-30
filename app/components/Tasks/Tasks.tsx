"use client";
import React from "react";
import styled from "styled-components";
import { useGlobalState } from "@/app/context/globalContextProvider";

const Tasks = () => {
  const { theme } = useGlobalState();
  return <TasksStyled theme={theme}>Tasks</TasksStyled>;
};
export default Tasks;

const TasksStyled = styled.main`
  background-color: ${(props) => props.theme.colorBg2};
  border: 2px solid ${(props) => props.theme.borderColor2};
  width: 100%;
  border-radius: 1rem;
  padding: 2rem;
  overflow-y: auto;
  height: 100%;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
`;
