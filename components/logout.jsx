import Cookies from "js-cookie";
import React from "react";
import { useRouter } from "next/router";

const Logout = () => {
  const router = useRouter();

  const clearCookies = () => {
    Cookies.remove("authorization");
    router.push("/");
  };

  return (
    <div>
      <button onClick={clearCookies}>Logout</button>
    </div>
  );
};

export default Logout;
