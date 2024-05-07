import axios from "axios";
import React, { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Password = () => {
  const [data, setData] = useState();
  const router = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/users/changePassword", data);
      console.log(res);
      alert("Password changed successfully!");
      router("/");
      window.location.reload();
    } catch (error) {
      console.log(`Error while posting blog! ${error}`);
    }
  };
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <form
        action="post"
        className="flex flex-col gap-12 items-center justify-center"
      >
        <input
          type="text"
          className="shadow-black placeholder:font-semibold shadow-md w-96 p-2 h-10 outline-none border-none rounded-lg"
          placeholder="Enter old password"
          name=""
          onChange={handleChange}
          required
          id="oldPassword"
        />
        <input
          type="text"
          className="shadow-black placeholder:font-semibold shadow-md w-96 p-2 h-10 outline-none border-none rounded-lg"
          placeholder="Enter old password"
          name=""
          onChange={handleChange}
          required
          id="newPassword"
        />
        <Button text="Change" func={handleSubmit} />
      </form>
    </div>
  );
};

export default Password;
