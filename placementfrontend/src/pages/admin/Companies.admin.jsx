import Layout from '../../components/layout/Layout';
import CalendarView from './visualize/CalenderView.admin';
import PlacementDrives from '../../hooks/PlacementDrives.hooks';
import { Card } from "flowbite-react";
import viewIcon from './elements/view_icon.png';

function AdminCompanies() {
    const placementDrives = PlacementDrives(); // Use the custom hook

  return (
    <Layout>
        <section > 
        <div className=" flex justify-center w-full ">
            <img src="https://media.istockphoto.com/id/1545800194/vector/sales-performance-isolated-set-financial-profit-growth-increase-in-earnings-people.jpg?s=612x612&w=0&k=20&c=bkq1w9zVBBg5Os-EgNeLxwceBFQtcL-iPk8UH50Hx1k=" alt="Payment Methods" />
        </div>   
            <div>  
                <h1 className="flex justify-center">Welcome to admin company page !!</h1>;
            </div> 
        </section> 
        <section>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 p-2">
          <Card href="/admin/companies/top" className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Top Recruiters
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              View the list of upcoming placement drives and their details.
            </p>
          </Card>
          <Card href="/admin/companies/all" className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Registered Company
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              View the list of upcoming placement drives and their details.
            </p>
          </Card>
          <Card href="/admin/companies/offers" className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Offers Received
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              View the list of upcoming placement drives and their details.
            </p>
          </Card>
          <Card href="/admin/companies/new" className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              New Registration
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              View the list of upcoming placement drives and their details.
            </p>
          </Card>
        {/* Add more cards here */}
        </div>
        </section>
        <section>
          <div className='flex flex-row justify-between py-3'>
            <h2 className="text-xl font-semibold mb-4">Track Drives</h2>
            <button
              onClick={() => window.location.href = `/admin/companies/drives`}
              className="flex items-stretch text-black bg-blue-600 hover:bg-blue-700 rounded-lg font-small rounded-full space-x-1 text-sm px-2 py-2 text-center mb-2"
            >
              <img src={viewIcon} alt="icon" className="w-4 h-4 " /> {/* Adjust size */}
              <span>All drives</span> 
            </button>
          </div>
          <CalendarView placementDrives={placementDrives} /> {/* Pass placementDrives to CalendarView */}
        </section>
    </Layout>
  );
};

export default AdminCompanies;