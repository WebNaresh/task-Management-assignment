import React, { useEffect } from "react";
import { useContext } from "react";
import axios from "axios";
import UseContext from "../UseState/UseContext";
import UseEffectContext from "./UseEffectContext";
export const UseEffectState = (props) => {
  const { setProgress, location, tasks, setTasks } = useContext(UseContext);
  const state = { name: "harry", class: "5b" };
  useEffect(() => {
    // console.log(location);
    setProgress(10);
    setTimeout(() => {
      setProgress(100);
    }, 1000);
    // eslint-disable-next-line
  }, [location]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/tasks")
      .then((response) => {
        // Process the response data
        setTasks(response.data);
      })
      .catch((error) => {
        if (error.response) {
          // Server responded with a non-2xx status code
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <UseEffectContext.Provider value={{ state }}>
      {props.children}
    </UseEffectContext.Provider>
  );
};
export default UseEffectState;
