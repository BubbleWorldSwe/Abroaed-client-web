import React from 'react';

import TestPrepContent from './TestPrepContent';
import Header from '../../components/Navbar';
import { HomeForm } from '../../components/AnimatedFormsTab';

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
