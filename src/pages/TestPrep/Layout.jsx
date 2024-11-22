import React from "react";

import TestPrepContent from "./TestPrepContent";
import Header from "../../Components/Header";
import { HomeForm } from "../../Components/AnimatedTabs";

function TestPrepLayout() {
  return (
    <div>
      <Header />
      <HomeForm />

      <TestPrepContent />
    </div>
  );
}

export default TestPrepLayout;
