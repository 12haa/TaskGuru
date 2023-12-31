"use client";
import React from "react";
// @ts-ignore
import { edit, trash } from "@/app/utils/icons";
import { styled } from "styled-components";
import { useGlobalState } from "@/app/context/globalContextProvider";
import formatDate from "@/app/utils/formatDate";
import CreateContent from "@/app/components/Modals/CreateContent";

interface Props {
  task: {
    title: string;
    date: string;
    isCompleted: boolean;
    important: boolean;
    description: string;
    id: string;
  };
}

const TaskItem = ({ task }: Props) => {
  const { theme, deleteTask, updateTask } = useGlobalState();
  const { id, title, date, isCompleted, important, description } = task;
  if (isCompleted) {
    console.log(isCompleted, "task is completed");
  } else {
    console.log("not completed");
  }
  return (
    <TaskItemStyled theme={theme}>
      <div className=" flex  flex-col gap-2 p-4 w-full h-full">
        <h1>{title}</h1>
        <p>{description}</p>
        <p className="date">{formatDate(date)}</p>
      </div>
      <div className="task-footer">
        {isCompleted ? (
          <button
            className="completed"
            onClick={() => {
              const task = {
                id,
                isCompleted: !isCompleted,
              };
              updateTask(task);
            }}
          >
            Completed
          </button>
        ) : (
          <button
            className="incomplete"
            onClick={() => {
              const task = {
                id,
                isCompleted: !isCompleted,
              };
              updateTask(task);
            }}
          >
            Incomplete
          </button>
        )}
        <button className="edit">{edit}</button>
        <button className="delete" onClick={() => deleteTask(id)}>
          {trash}
        </button>
      </div>
    </TaskItemStyled>
  );
};
const TaskItemStyled = styled.div`
  padding: 1.2rem 1rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.borderColor2};
  box-shadow: ${(props) => props.theme.shadow7};
  border: 2px solid ${(props) => props.theme.borderColor2};

  height: 16rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  @media only screen and (max-width < 768px) {
    border: 4px solid black;
    width: 100%;

    flex-direction: column;
  }

  .date {
    margin-top: auto;
  }

  > h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  .task-footer {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    button {
      border: none;
      outline: none;
      cursor: pointer;

      i {
        font-size: 1.4rem;
        color: ${(props) => props.theme.colorGrey2};
      }
    }

    .edit {
      margin-left: auto;
    }

    .completed,
    .incomplete {
      display: inline-block;
      padding: 0.4rem 1rem;
      background: ${(props) => props.theme.colorDanger};
      border-radius: 30px;
    }

    .completed {
      background: ${(props) => props.theme.colorGreenDark} !important;
    }
  }
`;
export default TaskItem;
