import React, { useState } from "react";
import UseContext from "./UseContext";
import { useCookies } from "react-cookie";
import { useLocation } from "react-router-dom";
export const UseState = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);

  const location = useLocation();

  const [appAlert, setAppAlert] = useState({
    alert: true,
    type: "success",
    msg: "this is success alert",
  });

  const [appLoading, setAppLoading] = useState({
    load: false,
    color: "#fff",
  });

  const [progress, setProgress] = useState(0);

  const [tasks, setTasks] = useState([]);
  console.log(`🚀 ~ tasks:`, tasks);
  const [open, setOpen] = React.useState({
    modal1: false,
    modal2: false,
  });

  const [id, setId] = useState("");

  const [data, setData] = useState({
    title: "",
    description: "",
  });
  return (
    <UseContext.Provider
      value={{
        cookies,
        setCookie,
        removeCookie,
        appAlert,
        setAppAlert,
        appLoading,
        setAppLoading,
        progress,
        setProgress,
        location,
        tasks,
        setTasks,
        open,
        setOpen,
        data,
        setData,
        id,
        setId,
      }}
    >
      {props.children}
    </UseContext.Provider>
  );
};
export default UseState;
