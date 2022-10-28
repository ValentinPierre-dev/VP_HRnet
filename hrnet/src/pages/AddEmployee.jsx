import React from 'react';

import Title from '../components/Title';
import Form from '../components/Form';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const AddEmployee = () => {
    return (
      <HelmetProvider>
        <Helmet>
          <title>HRNet - Create Employee</title>
        </Helmet>
        <main className="container">
          <section>
            <Form />
          </section>
        </main>
      </HelmetProvider>
    );
}

export default AddEmployee