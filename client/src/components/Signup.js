import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const SignUp = () => {
  const { handleGoogle, loading, error } = useFetch(
    "http://localhost:3000/signup"
  );
  useEffect(() => {
    /* global google */
    if (window.google) {
      google.accounts.id.initialize({
        client_id: "794968404021-vr1ps70ib6lm90c3oa2o1jrd79v94u3d.apps.googleusercontent.com",
        callback: handleGoogle,
      });
      google.accounts.id.renderButton(document.getElementById("signUpDiv"), {
        // type: "standard",
        theme: "filled_black",
        // size: "small",
        text: "continue_with",
        shape: "pill",
      });

      google.accounts.id.prompt()
    }
  }, [handleGoogle]);

  return (
    <>
      <NavBar></NavBar>
      <br />
      <Button
        component={Link}
        to="/"
        variant="contained"
        color="primary"
      >
        <ArrowBackIcon style={{ marginRight: "5px" }} /> Back
      </Button>
      <br />
      <br />
      <header style={{ textAlign: "center" }}>
        <h1>REGISTER TO CONTINUE</h1>
      </header>
      <br />
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {error && <p style={{ color: "red" }}>{error}</p>}
        {loading ? (
          <div>Loading....</div>
        ) : (
          <div id="signUpDiv" data-text="signup_with"></div>
        )}
      </main>
      <footer></footer>
    </>
  );
};

export default SignUp;
