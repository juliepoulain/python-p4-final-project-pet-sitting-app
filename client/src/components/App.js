import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import OwnerProfile from "./OwnerProfile";

function App() {
  return (
    <div>
      <h1>
        <OwnerProfile />
      </h1>
    </div>
  );
}

export default App;
