import React from 'react';
import Layout from '../../../components/layout/Layout';
import ListNewCompanies from '../tabulardata/ListNewCompanies.admin';
import AdminButtons from '../../../components/elements/AdminButtons';


function NewCompanies() {
  return (
    <div className='bg-blue-200 '>
      <Layout>
        <h2 className="text-2xl font-bold text-center my-4">New Registration </h2>
        <ListNewCompanies/>
        <AdminButtons/>
      </Layout>
    </div>
  )
}

export default NewCompanies