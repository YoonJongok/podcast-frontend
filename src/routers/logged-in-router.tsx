import React from "react";
import { isLoggedInVar } from "../apollo";
export const LoggedInRouter = () => {
  return (
    <div>
      <h1>logged in</h1>
      <button onClick={() => isLoggedInVar(false)}>log out</button>
    </div>
  );
};
