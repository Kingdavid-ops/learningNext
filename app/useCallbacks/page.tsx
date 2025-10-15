"use client";

import React, { useMemo, useState } from "react";

const allUsers: number[] = [];

for (let index = 1; index < 20000000; index++) {
  allUsers.push(index);
}

const page = () => {
  const [count, setCount] = useState(0);
  const memo = useMemo(()=>allUsers.filter((user) => user === 20000000 -1),[]);
  
  return (
    <div>
      <h1>Count: {count}</h1>

      {memo.map((user, key) => (
        <p key={key}>{user}</p>
      ))}

      <button
        onClick={() =>
          setCount(count+1)
        }
        className="border bg-gray-200 px-2"
      >
        increase
      </button>
    </div>
  );
};

export default page;
