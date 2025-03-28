import Layout from '../../components/layout/Layout';
import CalendarView from './visualize/CalenderView.admin';
import PlacementDrives from '../../hooks/PlacementDrives.hooks';
import { Card } from "flowbite-react";
import viewIcon from './elements/view_icon.png';
import headerImg from './elements/cmMain.png';
import AdminButtons from "../../components/elements/AdminButtons";
function AdminCompanies() {
    const placementDrives = PlacementDrives(); // Use the custom hook

  return (
    <Layout>
        <section > 
          <div className=" flex justify-center w-full mt-8 ">
          <img src={headerImg} alt="Search" className=" left- top- h- w- opacity-" style={{ height: "200px" }}/>
          </div>   
          <div>  
              <h1 className="flex text-2xl mt-4 font-bold text-center my-2 text-indigo-900 justify-center">Welcome To  Companies Related Details!</h1>;
          </div> 
      
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 p-2">
            <Card href="/admin/companies/top" className="max-w-sm  bg-gradient-to-r from-indigo-700 to-violet-700">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Top Recruiters
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Explore the list of top hrirng companies.
              </p>
            </Card>
            <Card href="/admin/companies/all" className="max-w-sm bg-gradient-to-r from-indigo-600 to-violet-700">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Registered Company
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                All the details of the companies are here.
              </p>
            </Card>
            <Card href="/admin/companies/offers" className="max-w-sm bg-gradient-to-r from-indigo-700 to-violet-800">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Offers Received
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                List of our success stories and outcome.
              </p>
            </Card>
            <Card href="/admin/companies/new" className="max-w-sm  bg-gradient-to-r from-indigo-800 to-violet-700">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                New Registration
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                What's New to our bucket list <span className='font-bold dark:text-gray-600'>?</span>
              </p>
            </Card>
          {/* Add more cards here */}
          </div>
        </div>  </section> 
        <section>
          <div className='flex flex-row justify-between py-3'>
            <h2 className="text-xl px-20 font-bold text-center my-2 text-indigo-900  mb-4">Track Drives</h2>
            <button
              onClick={() => window.location.href = `/admin/companies/drives`}
              className="flex items-stretch flex text-black bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-500 
              hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-violet-200 dark:focus:ring-violet-900 shadow-lg 
              shadow-black-200/90 dark:shadow-lg dark:shadow-yellow-700/50 font-medium rounded-lg text-sm px-2 py-3 text-center pr-3 me-2 mb-2"
            >
              <img src={viewIcon} alt="icon" className="w-4 h-4 mx-1 me-1.5 mb-2" /> {/* Adjust size */}
              <span>All drives</span> 
            </button>
          </div>
          <CalendarView placementDrives={placementDrives} /> {/* Pass placementDrives to CalendarView */}
        </section>
        <AdminButtons/>
    </Layout>
  );
};

export default AdminCompanies;