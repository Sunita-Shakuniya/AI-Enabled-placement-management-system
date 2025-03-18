import React from 'react'
import Layout from '../../../components/layout/Layout'
import ListCompany from '../tabulardata/ListCompany.admin'

function Companies() {
  return (
    <div>
      <Layout>
        <div className='container mx-auto p-6'>
            <ListCompany/>
        </div>
      </Layout>
    </div>
  )
}

export default Companies