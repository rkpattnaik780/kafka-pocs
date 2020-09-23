import React, { useEffect } from "react";

import { Button } from 'carbon-components-react';

import { useHistory } from 'react-router-dom';

export const LoginPage = () => {

  const history = useHistory();

  useEffect(() => {
    console.log("mounted");
    fetch("http://localhost:8080/auth/check", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      }
    })
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          if(result.user){
            console.log(history);
            history.push("/charts");
          }
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.error(true);
          // setError(error);
        }
      )
  }, [])

  return (
    <div>
      <a href="http://localhost:8080/auth/github">
        <Button
          style={{
            margin: "300px",
            fontSize: "20px"
          }}
        >Sign in with Github</Button>
      </a>
    </div>
  );
}