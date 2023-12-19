import React, { useState } from "react";
import Usecontaxt from "./Usecontaxt";

const UsecontaxtProvider = ({ children }) => {
  const [data, setdata] = useState([]);
  const [addcard, setaddcard] = useState([]);
  const [maincard, setmaincard] = useState([]);
  const [login, setlogin] = useState([]);
  return (
    <Usecontaxt.Provider
      value={{
        login,
        setlogin,
        maincard,
        setmaincard,
        addcard,
        setaddcard,
        data,
        setdata,
      }}
    >
      {children}
    </Usecontaxt.Provider>
  );
};
export default UsecontaxtProvider;
