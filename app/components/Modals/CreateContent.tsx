"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useGlobalState } from "@/app/context/globalContextProvider";
import { styled } from "styled-components";
import Button from "@/app/components/Button/Button";
import { plus } from "@/app/utils/icons";
import { Simulate } from "react-dom/test-utils";
import resize = Simulate.resize;

const CreateContent = () => {
  const { allTasks, modal, openModal, closeModal } = useGlobalState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [completed, setCompleted] = useState(false);
  const [important, setImportant] = useState(false);
  const { theme } = useGlobalState();
  // SUBMIT BUTTON FUNCTIONALITY
  const handleChange = (name: String) => (e: any) => {
    switch (name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "description":
        setDescription(e.target.value);
        break;
      case "date":
        setDate(e.target.value);
        break;
      case "completed":
        setCompleted(e.target.checked);
        break;
      case "important":
        setImportant(e.target.checked);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const task = {
      title,
      description,
      date,
      completed,
      important,
    };
    try {
      const res = await axios.post("/api/tasks", task);
      if (res.data.error) {
        toast.error(res.data.error);
      }
      toast.success("Task created successfully");
      if (!res.data.error) {
        allTasks().then(() => console.log(" "));
        closeModal();
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  };

  return (
    <CreateContentStyled onSubmit={handleSubmit} theme={theme}>
      <h1>Create a Task</h1>
      <div className="input-control">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          value={title}
          id="title"
          name="title"
          onChange={handleChange("title")}
          placeholder="Title"
        />
      </div>{" "}
      <div className="input-control">
        <label htmlFor="description">Description</label>
        <textarea
          value={description}
          id="description"
          name="description"
          rows={4}
          onChange={handleChange("description")}
          placeholder="Title"
        ></textarea>
      </div>
      <div className="input-control">
        <label htmlFor="date">Date</label>
        <input
          value={date}
          id="date"
          type="date"
          name="date"
          onChange={handleChange("date")}
        />
      </div>
      <div className="input-control">
        <label htmlFor="completed">Completed</label>
        <input
          type="checkbox"
          value={completed.toString()}
          id="completed"
          name="completed"
          onChange={handleChange("completed")}
        />
      </div>
      <div className="input-control">
        <label htmlFor="important">Important</label>
        <input
          type="checkbox"
          value={important.toString()}
          id="important"
          name="important"
          onChange={handleChange("important")}
        />
      </div>
      <div className="submit-btn flex justify-end ">
        <Button
          type="submit"
          name="Create Task"
          icon={plus}
          padding={"0.8rem 2rem"}
          borderRad="0.4rem"
          fw={"500"}
          fs={"1.2rem"}
          background={theme.colorGreenDark}
        />
      </div>
    </CreateContentStyled>
  );
};
const CreateContentStyled = styled.form`
  > h1 {
    font-size: clamp(1.2rem, 5vw, 1.6rem);
    font-weight: 600;
  }

  color: ${(props) => props.theme.colorGrey1};

  .input-control {
    position: relative;
    margin: 1.6rem 0;
    font-weight: 500;

    @media screen and (max-width: 450px) {
      margin: 1rem 0;
    }

    label {
      margin-bottom: 0.5rem;
      display: inline-block;
      font-size: clamp(0.9rem, 5vw, 1.2rem);

      span {
        color: ${(props) => props.theme.colorGrey3};
      }
    }

    input,
    textarea {
      width: 100%;
      padding: 1rem;

      resize: none;
      background-color: ${(props) => props.theme.colorGreyDark};
      color: ${(props) => props.theme.colorGrey2};
      border-radius: 0.5rem;
    }
  }

  .submit-btn button {
    transition: all 0.35s ease-in-out;

    @media screen and (max-width: 500px) {
      font-size: 0.9rem !important;
      padding: 0.6rem 1rem !important;

      i {
        font-size: 1.2rem !important;
        margin-right: 0.5rem !important;
      }
    }

    i {
      color: ${(props) => props.theme.colorGrey0};
    }

    &:hover {
      background: ${(props) => props.theme.colorPrimaryGreen} !important;
      color: ${(props) => props.theme.colorWhite} !important;
    }
  }

  .toggler {
    display: flex;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;

    label {
      flex: 1;
    }

    input {
      width: initial;
    }
  }
`;
export default CreateContent;
