import React, { useEffect, useState } from "react";
import { getUser, getUserGender } from "../service/userService";

export const UserGreeting: React.FC = () => {
  const [name, setName] = useState<string | null>(null);
  const [gender, setGender] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUser();
        const userGender = await getUserGender();
        setName(user.name);
        setGender(userGender.gender);
      } catch (error) {
        console.error("error", error);
        setName(null);
        setGender(null);
      }
    };
    fetchUser();
  }, []);
  return (
    <>
      <div>Hello, {name ? name : "Guest"}!</div>
      <div>Gender: {gender ? gender : "NA"}</div>
    </>
  );
};
