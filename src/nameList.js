import React from "react";

export default function NameList(props) {
  
  return (
    <div>
      <ul>
        {props.people.map((person, index) => (
          <li key={index}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
}