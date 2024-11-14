import React from 'react';
import Header from '../../Components/Navbar';

import FAQ from '../../Components/FAQ';
import TestPrepContent from './TestPrepContent';
import { HomeForm } from '../../Components/AnimatedFormsTab';

function TestPrepLayoutPage() {
  return (
    <div>
      <Header />
      <HomeForm />

      <TestPrepContent />
    </div>
  );
}

export default TestPrepLayoutPage;
