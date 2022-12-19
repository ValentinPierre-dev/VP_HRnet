// React
import React from 'react';

// Components
import Title from '../components/Title';
import EnhancedTable from '../components/EnhancedTable';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const EmployeesList = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>HRNet - Employees list</title>
      </Helmet>
      <main className="container">
        <section>
          <div className='table'>
            <Title title="Current Employees" />
            <EnhancedTable />
          </div>
        </section>
      </main>
    </HelmetProvider>
  );
};

export default EmployeesList