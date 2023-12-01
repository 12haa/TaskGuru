"use client";

import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const CreateContent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [completed, setCompleted] = useState(false);
  const [important, setImportant] = useState(false);

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
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }

    console.log(title, description, date, completed, important);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create a Task</h1>
      <div className="input-contol">
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
      <div className="input-contol">
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
      <div className="input-contol">
        <label htmlFor="date">Date</label>
        <input
          value={date}
          id="date"
          type="date"
          name="date"
          onChange={handleChange("date")}
        />
      </div>
      <div className="input-contol">
        <label htmlFor="completed">Completed</label>
        <input
          type="checkbox"
          value={completed.toString()}
          id="completed"
          name="completed"
          onChange={handleChange("completed")}
        />
      </div>
      <div className="input-contol">
        <label htmlFor="important">Important</label>
        <input
          type="checkbox"
          value={important.toString()}
          id="important"
          name="important"
          onChange={handleChange("important")}
        />
      </div>
      <div className="submit-btn">
        <button type="submit">
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
};
export default CreateContent;
