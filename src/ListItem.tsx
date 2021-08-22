import React from "react";
import "./List.css";

export default function (props: { desc: string; time: number }) {
  function formatDate(date: Date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    //@ts-ignore
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return (
      date.getMonth() +
      1 +
      "/" +
      date.getDate() +
      "/" +
      date.getFullYear() +
      "  " +
      strTime
    );
  }
  return (
    <div className="ListItem">
      <div className="Description">{props.desc}</div>
      <div className="TimeStamp">{formatDate(new Date(props.time))}</div>
    </div>
  );
}
