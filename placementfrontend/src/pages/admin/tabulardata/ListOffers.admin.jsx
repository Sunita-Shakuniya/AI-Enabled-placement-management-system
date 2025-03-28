import React, { useEffect, useState } from 'react'
import { fetchOffers } from '../../../services/offers.services';

function ListOffers() {
    const [offers, setOffers] = useState([]);
    
    useEffect(() => {
    const getOffers = async () => {
          try {
            const offersData = await fetchOffers();
    
            setOffers(offersData);
          } catch (error) {
            console.error("Error fetching companies:", error);
          }
        };
    
        getOffers();
      }, []);
    
  return (
    <div>
      <div className="mb-4">
                <h2 className="text-2xl font-bold text-center my-4">List Of Offers Received </h2>
                <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
                    <thead>
                    <tr className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                        <th className="px-6 py-3 text-left text-sm font-semibold">Student ID</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold">Company ID</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold">CTC (LPA)</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold">Role</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold">Offer Date</th>
                    </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-200'>
                    {offers.map((offer) => (
                        <tr key={offer.offer_id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-2"><p className='text-sm text-gray-600'>{offer.student_id}</p></td>
                        <td className="px-6 py-2"><p className='text-sm text-gray-600'>{offer.company_id}</p></td>
                        <td className="px-6 py-2"><h6 className='text-sm font-semibold text-gray-900'>{offer.ctc}</h6></td>
                        <td className="px-6 py-2"><h5 className='text-sm font-semibold text-gray-900'>{offer.role}</h5></td>
                        <td className="px-6 py-2"><p className='text-sm text-gray-600'>{offer.offer_date}</p></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </div>
    </div>
  )
}

export default ListOffers
