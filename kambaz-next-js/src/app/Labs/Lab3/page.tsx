"use client";
import React from "react";
import Variables from "./Variables";
import Functions from "./Functions";
import Arrays from "./Arrays";
import Objects from "./Objects";
import DynamicStyling from "./DynamicStyling";
import ParameterizingComponents from "./ParameterizingComponents";
import Debugging from "./Debugging";

export default function Lab3() {
  return (
    <div className="container mt-4 mb-5">
      <h1 className="mb-3">Lab 3 – JavaScript Fundamentals</h1>
      <hr />
      <Variables />
      <Functions />
      <Arrays />
      <Objects />
      <DynamicStyling />
      <ParameterizingComponents />
      <Debugging />
    </div>
  );
}
