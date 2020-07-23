import React from "react";

export const fullScreen = (story) => (
  <div style={{ height: "100vh" }}>{story()}</div>
);
