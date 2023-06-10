import React from "react";
import { useContext } from "react";
import TestContext from "./TestContext";
import UseContext from "../UseState/UseContext";
import axios from "axios";

export const TestState = (props) => {
  const {
    setAppAlert,
    setAppLoading,
    open,
    setOpen,
    setId,
    setData,
    setTasks,
    tasks,
  } = useContext(UseContext);

  const handleAlert = (alert, type, msg) => {
    setAppAlert({
      alert: alert || false,
      type: type || "success",
      msg: msg || "this is test message",
    });
  };

  const handleLoader = (load, color) => {
    setAppLoading({
      load: load || true,
      color: color || "#fff",
    });

    setTimeout(() => {
      setAppLoading({
        load: false,
      });
    }, 2000);
  };

  const handleEdit = async (taskId, title, description) => {
    try {
      // Make an API call to update the task on the backend
      const data1 = {
        id: taskId,
        title: title,
        description: description,
      };
      const config = { headers: { "Content-Type": "application/json" } };

      await axios
        .put(`http://localhost:4000/tasks/${taskId}`, data1, config)
        .catch((errors) => {})
        .then((response) => {});

      // Update the state by replacing the specific task with matching ID
      tasks.forEach((element) => {
        console.log(`🚀 ~ element.id:`, element.id);
        console.log(`🚀 ~ taskId:`, taskId);
        console.log(`🚀 ~ element.id === taskId:`, element.id === taskId);
        if (element.id === taskId) {
          element.title = title;
          element.description = description;
        }
      });
      setTasks(tasks);

      setOpen({
        ...open,
        modal1: false,
      });
    } catch (error) {
      // Handle error
    }
  };

  const handleDelete = async (taskId) => {
    try {
      // Make an API call to delete the task on the backend
      const config = { headers: { "Content-Type": "application/json" } };

      await axios
        .delete(`http://localhost:4000/tasks/${taskId}`, config)
        .catch((errors) => {})
        .then((response) => {});

      // Update the state by removing the deleted task
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    } catch (error) {
      // Handle error
    }
  };

  const handleOpenCard = (id, title, description) => {
    setId(id);
    setOpen({
      ...open,
      modal1: true,
    });
    setData((copy) => ({ ...copy, title: title, description: description }));
  };

  const handleCloseCard = () => {
    setOpen({
      ...open,
      modal1: false,
    });
  };
  const handleOpenCard2 = (id, title, description) => {
    setId(id);
    setOpen({
      ...open,
      modal2: true,
    });
    setData((copy) => ({ ...copy, title: title, description: description }));
  };

  const handleCloseCard2 = () => {
    setOpen({
      ...open,
      modal2: false,
    });
  };

  const handleCreate = async (title, description) => {
    try {
      // Make an API call to create the task on the backend
      const data1 = {
        title: title,
        description: description,
      };
      const config = { headers: { "Content-Type": "application/json" } };

      await axios
        .post(`http://localhost:4000/tasks/`, data1, config)
        .catch((errors) => {})
        .then((response) => {
          // Update the state with the newly created task
          data1.id = response.data.insertedId;
          setTasks([...tasks, data1]);
        });

      setOpen({
        ...open,
        modal2: false,
      });
    } catch (error) {
      // Handle error
    }
  };

  return (
    <TestContext.Provider
      value={{
        handleAlert,
        handleLoader,
        handleEdit,
        handleDelete,
        handleOpenCard,
        handleCloseCard,
        handleOpenCard2,
        handleCloseCard2,
        handleCreate,
      }}
    >
      {props.children}
    </TestContext.Provider>
  );
};

export default TestState;
