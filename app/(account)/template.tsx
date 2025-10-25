"use client";
import { useState } from "react";

const ProfileTemplate = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <input
        value={value}
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

export default ProfileTemplate;
