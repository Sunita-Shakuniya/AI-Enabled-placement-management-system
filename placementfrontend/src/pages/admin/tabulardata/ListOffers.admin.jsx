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
      <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Offers List</h2>
                <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                    <tr className="bg-gray-100 border-b">
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Student ID</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Company ID</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">CTC (LPA)</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Role</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Offer Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {offers.map((offer) => (
                        <tr key={offer.offer_id} className="border-b hover:bg-gray-50">
                        <td className="px-6 py-2">{offer.student_id}</td>
                        <td className="px-6 py-2">{offer.company_id}</td>
                        <td className="px-6 py-2">{offer.ctc}</td>
                        <td className="px-6 py-2">{offer.role}</td>
                        <td className="px-6 py-2">{offer.offer_date}</td>
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
