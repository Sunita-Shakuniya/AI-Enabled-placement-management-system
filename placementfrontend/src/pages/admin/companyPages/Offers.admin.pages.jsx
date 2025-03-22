import React from 'react';
import Layout from '../../../components/layout/Layout';
import ListOffers from '../tabulardata/ListOffers.admin';
import AdminButtons from '../../../components/elements/AdminButtons';

function Offers() {
  return (
    <div>
      <Layout>
        <div className='container mx-auto p-6'>
          <ListOffers/>
        </div>
        <AdminButtons />
      </Layout>
    </div>
  )
}   

export default Offers
