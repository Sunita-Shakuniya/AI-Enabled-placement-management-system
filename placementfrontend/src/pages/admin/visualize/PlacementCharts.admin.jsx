import React from 'react';
import Chart from 'react-apexcharts';

const PlacementCharts = () => {
  // Donut Chart Configuration
  const donutOptions = {
    series: [23, 35, 10, 20, 35, 23], // Data values
    chart: {
      type: 'donut', // Chart type
      height: 350, // Chart height
    },
    labels: ['36h', '56h', '16h', '32h', '56h', '16h'], // Labels for each slice
    colors: ['#A5B4FC', '#6366F1', '#C4B5FD', '#8B5CF6', '#1E40AF' ,  '#3B82F6',], // Custom colors
    responsive: [
      {
        breakpoint: 480, // Breakpoint for small screens
        options: {
          chart: {
            width: '100%', // Full width on small screens
          },
          legend: {
            position: 'bottom', // Move legend to the bottom on small screens
          },
        },
      },
    ],
  };


  // Bar Chart Configuration
  const barOptions = {
    series: [
      {
        name: 'Placed Students',
        data: [120, 90, 60, 30], // Placed students per department
      },
      {
        name: 'Unplaced Students',
        data: [30, 25, 20, 15], // Unplaced students per department
      },
    ],
    chart: {
      type: 'bar',
      height: 350,
      stacked: false, // Disable stacking (grouped bars)
    },
    xaxis: {
      categories: ['Computer Science', 'Mechanical', 'Electrical', 'Civil'], // Departments
    },
    colors: ['#4F46E5', '#7C3AED'], // Green for placed, Red for unplaced
    plotOptions: {
      bar: {
        horizontal: false, // Vertical bars
        columnWidth: '70%', // Adjust bar width
      },
    },
    legend: {
      position: 'top', // Position the legend at the top
    },
  };
  // Line Chart Configuration
  const lineOptions = {
    series: [
      {
        name: 'Computer Science',
        data: [5, 8, 10, 7, 12, 9], // Drives per month for Computer Science
      },
      {
        name: 'Mechanical',
        data: [3, 6, 8, 5, 9, 7], // Drives per month for Mechanical
      },
      {
        name: 'Electrical',
        data: [2, 4, 6, 3, 8, 5], // Drives per month for Electrical
      },
      {
        name: 'Civil',
        data: [1, 3, 5, 2, 6, 4], // Drives per month for Civil
      },
    ],
    chart: {
      type: 'line',
      height: 250,
    },
    xaxis: {
      categories: ['January', 'February', 'March', 'April', 'May', 'June'], // Months
    },
    colors: ['#4F46E5', '#7C3AED', '#8B5CF6', '#6366F1', '#818CF8'], // Custom colors for each department
    stroke: {
      width: 1, // Line thickness
      //dashArray: [5, 5], // Make the stroke dotted (5px dash, 5px gap)
    },
    markers: {
      size: 3, // Marker size
    },
    legend: {
      position: 'bottom', // Position the legend at the top
    },
    tooltip: {
      enabled: true, // Enable tooltips
    },
  };

    // Static sample data - each point represents a student's package
    const staticData = [
      { department: 'Computer Science', package: 7.2 },
      { department: 'Computer Science', package: 8.5 },
      { department: 'Computer Science', package: 12.1 },
      { department: 'Computer Science', package: 9.3 },
      { department: 'Computer Science', package: 16.8 },
      { department: 'Mechanical', package: 6.5 },
      { department: 'Mechanical', package: 7.8 },
      { department: 'Mechanical', package: 11.2 },
      { department: 'Electrical', package: 7.5 },
      { department: 'Electrical', package: 15.4 },
      { department: 'Civil', package: 6.2 },
      { department: 'Civil', package: 8.9 },
    ];
  
    // Process data for scatter plot
    const seriesData = [
      {
        name: 'Computer Science',
        data: staticData
          .filter(item => item.department === 'Computer Science')
          .map(item => item.package)
      },
      {
        name: 'Mechanical',
        data: staticData
          .filter(item => item.department === 'Mechanical')
          .map(item => item.package)
      },
      {
        name: 'Electrical',
        data: staticData
          .filter(item => item.department === 'Electrical')
          .map(item => item.package)
      },
      {
        name: 'Civil',
        data: staticData
          .filter(item => item.department === 'Civil')
          .map(item => item.package)
      }
    ];
  
    // Scatter plot configuration
    const scatterOptions = {
      chart: {
        type: 'scatter',
        height: 500,
        zoom: {
          enabled: true,
          type: 'xy'
        },
        toolbar: {
          show: true
        }
      },
      xaxis: {
        tickAmount: 10,
        title: {
          text: 'Students',
          style: {
            fontSize: '14px',
            fontWeight: 'bold'
          }
        },
        labels: {
          formatter: function(val) {
            return parseInt(val) + 1; // Display student index
          }
        }
      },
      yaxis: {
        title: {
          text: 'Package (LPA)',
          style: {
            fontSize: '14px',
            fontWeight: 'bold'
          }
        },
        min: 5,
        max: 20
      },
      colors: ['#4F46E5', '#7C3AED', '#8B5CF6', '#6366F1', '#818CF8'],
      legend: {
        position: 'top',
        horizontalAlign: 'center'
      },
      tooltip: {
        custom: function({ seriesIndex, dataPointIndex, w }) {
          const department = w.globals.seriesNames[seriesIndex];
          const packageValue = w.globals.series[seriesIndex][dataPointIndex];
          return `
            <div class="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
              <div class="font-bold text-gray-800">${department}</div>
              <div class="text-sm text-gray-600">Package: ${packageValue} LPA</div>
              <div class="text-sm text-gray-600">Student #${dataPointIndex + 1}</div>
            </div>
          `;
        }
      },
      markers: {
        size: 8,
        strokeWidth: 0,
        hover: {
          size: 10
        }
      }
    };
  



  return (
    <div className="container px-5 mx-auto mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-center pl-10 pr-10">
        {/* Donut Chart Card */}
        <div className="border-2 hover:shadow-blue-100 shadow-[inset_0_0_10px_rgba(0,0,0,0.15)] bg-white-100 px-4 py-3 rounded-xl border border-gray-300 " style={{ color: 'rgb(4, 33, 89)' }}>
          <div className="w-full h-[200px] mb-3">
            <Chart
              options={donutOptions}
              series={donutOptions.series}
              type="donut"
              height="100%"
            />
          </div>
          <h6 className="title-font font-medium text-3l text-black fonts1">231</h6>
          <p className="font-bold" style={{ color: 'rgb(4, 33, 89)' }}>Total Students</p>
        </div>

        {/* Bar Chart Card */}
        <div className="border-2 hover:shadow-blue-100 shadow-[inset_0_0_10px_rgba(0,0,0,0.15)] bg-white-100 px-4 py-3 rounded-xl border border-gray-300" style={{ color: 'rgb(4, 33, 89)' }}>
          <div className="w-full h-[200px] mb-3">
            <Chart
              options={barOptions}
              series={barOptions.series}
              type="bar"
              height="100%"
            />
          </div>
          <p className="font-bold" style={{ color: 'rgb(4, 33, 89)' }}>Student Placed Percentage</p>
        </div>
        {/* Line Chart Card */}
        <div className="border-2 hover:shadow-blue-100 shadow-[inset_0_0_10px_rgba(0,0,0,0.15)] bg-white-100 px-4 py-3 rounded-xl border border-gray-300" style={{ color: 'rgb(4, 33, 89)' }}>
          <div className="w-full h-[200px] mb-3"> {/* Adjust height as needed */}
            <Chart
              options={lineOptions}
              series={lineOptions.series}
              type="line"
              height="100%"
            />
          </div>
          <h6 className="title-font font-medium text-3l text-black fonts1">Company Drives Conducted</h6>
        </div>
        {/* Bubble Chart Card */}
        <div className="border-2 hover:shadow-blue-100 shadow-[inset_0_0_10px_rgba(0,0,0,0.15)] bg-white-100 px-4 py-3 rounded-xl border border-gray-300" style={{ color: 'rgb(4, 33, 89)' }}>
          <h2 className="text-xl font-bold mb-4 text-gray-800">Student Placement Packages</h2>
          <div className="w-full h-[200px]">
            <Chart
              options={scatterOptions}
              series={seriesData}
              type="scatter"
              height="100%"
              width="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacementCharts;