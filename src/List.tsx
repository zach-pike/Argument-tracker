import React, { useState, useRef, useEffect } from "react";
import "./List.css";

import ListItem from "./ListItem";

interface ArgumentData {
  info: string;
  time: number;
}

export default function () {
  const [Arguments, SetArguments] = useState<ArgumentData[]>([]);
  const inputRef = useRef<any>();

  useEffect(() => {
    let StoredArguments = JSON.parse(localStorage.getItem("args") || "[]");

    SetArguments(StoredArguments);
  }, []);

  useEffect(() => {
    localStorage.setItem("args", JSON.stringify(Arguments));
    console.log("Update");
  }, [Arguments]);

  function submit() {
    if (inputRef.current.value === "") return;

    SetArguments([
      { info: inputRef.current.value, time: Date.now() },
      ...Arguments
    ]);

    inputRef.current.value = "";
  }

  return (
    <>
      <div className="List">
        {Arguments.map((data) => (
          <ListItem desc={data.info} time={data.time} />
        ))}

        {Arguments.length === 0 ? <p>No Arguments added</p> : <></>}

        <h5>List lenght: {Arguments.length}</h5>
      </div>

      <div className="Inputs">
        <input ref={inputRef} />
        <div onClick={submit} className="SubmitButton">
          Add
        </div>
      </div>
    </>
  );
}
