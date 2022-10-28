import React from 'react';

import Title from '../components/Title';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const EmployeesList = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>HRNet - Employees list</title>
      </Helmet>
      <main className="container">
        <section>
          <Title title="Current Employees" />
          
        </section>
      </main>
    </HelmetProvider>
  );
};

export default EmployeesList