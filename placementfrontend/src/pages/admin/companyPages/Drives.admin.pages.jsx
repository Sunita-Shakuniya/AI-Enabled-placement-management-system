import React from 'react';
import Layout from '../../../components/layout/Layout';
import ListDrives from '../tabulardata/ListDrives';
import AdminButtons from '../../../components/elements/AdminButtons';

function Drives() {
  return (
    <div>
        <Layout>
        <div className='container mx-auto p-6'>
          <ListDrives/>
        </div>
        <AdminButtons />
        </Layout>
      
    </div>
  )
}

export default Drives
