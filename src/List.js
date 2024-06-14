import React from "react";

export default function Listview() {
  const List = [
    {
      name: "Apple",
      id: 1,
    },
    {
      name: "Mango",
      id: 2,
    },
    {
      name: "Banana",
      id: 3,
    },
    {
      name: "Grapes",
      id: 4,
    },
  ];
  return (
    <>
      {List.map((v) => {
        return (
          <li key={v.id} className="List">
            {v.name}
          </li>
        );
      })}
    </>
  );
}
