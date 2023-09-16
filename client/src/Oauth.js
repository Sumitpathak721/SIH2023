// import axios from "axios";
import React from "react";

export default async function Oauth(token) {
  let res = await fetch("http://localhost:5000/userInfo", {
    headers: {
      "Content-Type": "application/json",
      authorization: JSON.parse(token),
    },
  });
  // console.log(res);
  res = await res.json();
  return res;
}
