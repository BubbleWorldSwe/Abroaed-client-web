import React from 'react';

import TestPrepContent from './TestPrepContent';
import Header from '../../Components/HeaderNav';
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
