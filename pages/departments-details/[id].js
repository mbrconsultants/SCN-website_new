

import React from 'react';
import Layout from "@/components/layout/Layout";
import SingleDepartmentsDetail from "@/components/sections/innerpages/DepartmentsDetails";



const DepartmentsDetails = () => {
    return (
      <>
        <Layout>
          {/* <PageTitle pageName="About Us" /> */}

          <SingleDepartmentsDetail />
        </Layout>
      </>
    );
}

export default DepartmentsDetails;
