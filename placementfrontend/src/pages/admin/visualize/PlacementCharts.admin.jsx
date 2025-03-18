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
    colors: ['#22A95E', '#24B364', '#56CA00', '#53D28C', '#7EDDA9', '#A9E9C5'], // Custom colors
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
    colors: ['#22A95E', '#FF4500'], // Green for placed, Red for unplaced
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
    colors: ['#22A95E', '#FF4500', '#1E90FF', '#FFD700'], // Custom colors for each department
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

  // Sample Data
  const sampleData = [
    { name: 'John Doe', department: 'Computer Science', package: 12 },
    { name: 'Jane Smith', department: 'Mechanical', package: 8 },
    { name: 'Alice Johnson', department: 'Electrical', package: 9 },
    { name: 'Bob Brown', department: 'Civil', package: 7 },
    { name: 'Charlie Davis', department: 'Computer Science', package: 10 },
    { name: 'Eva Green', department: 'Mechanical', package: 11 },
    { name: 'Frank White', department: 'Electrical', package: 6 },
    { name: 'Grace Black', department: 'Civil', package: 8 },
    { name: 'Henry Blue', department: 'Computer Science', package: 13 },
    { name: 'Ivy Yellow', department: 'Mechanical', package: 9 },
  ];

  // Process the Sample Data
  const processData = (data) => {
    const packageRanges = [
      { range: '5-10 LPA', min: 5, max: 10 },
      { range: '10-15 LPA', min: 10, max: 15 },
    ];

    const departments = ['Computer Science', 'Mechanical', 'Electrical', 'Civil'];

    // Initialize the processed data
    const processedData = [];

    packageRanges.forEach(({ range, min, max }) => {
      departments.forEach((department) => {
        const count = data.filter(
          (student) =>
            student.department === department &&
            student.package >= min &&
            student.package < max
        ).length;

     
          processedData.push({
            x: range,
            y: department,
            z: count, // Number of students in this range
          });
        
      });
    });

    return processedData;
  };

const processedData = processData(sampleData);
console.log('Processed Data:', processedData);
  // Bubble Chart Configuration
  const bubbleOptions = {
    series: [
      {
        name: 'Package Data',
        data: processedData, // Use the processed data
      },
    ],
    chart: {
      type: 'bubble',
      height: 350,
    },
    xaxis: {
      type: 'category', // X-axis represents categories (package ranges)
      categories: ['5-10 LPA', '10-15 LPA'], // Package ranges
    },
    yaxis: {
      type: 'numeric', // Y-axis represents categories (departments)
      categories: ['Computer Science', 'Mechanical', 'Electrical', 'Civil'], // Departments
    },
    colors: ['#22A95E', '#FF4500', '#1E90FF', '#FFD700'], // Custom colors for bubbles
    dataLabels: {
      enabled: true, // Show data labels on bubbles
      formatter: function (val) {
        return val.z; // Display number of students
      },
    },
    legend: {
      position: 'top', // Position the legend at the top
    },
    tooltip: {
      enabled: true, // Enable tooltips
      custom: function ({ seriesIndex, dataPointIndex, w }) {
        const data = w.globals.series[seriesIndex].data[dataPointIndex];
        return (
          `<div class="apexcharts-tooltip-custom">
            <strong>${data.y}</strong><br>
            Package Range: ${data.x}<br>
            Students: ${data.z}
          </div>`
        );
      },
    },
  };


  return (
    <div className="container px-5 mx-auto mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-center pl-10 pr-10">
        {/* Donut Chart Card */}
        <div className="border-2 hover:shadow-blue-100 shadow-[inset_0_0_10px_rgba(0,0,0,0.15)] bg-white-100 px-4 py-3 rounded-xl border border-gray-300" style={{ color: 'rgb(4, 33, 89)' }}>
          <div className="w-full h-48 mb-3">
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
          <div className="w-full h-48 mb-3">
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
          <div className="w-full h-96 mb-3"> {/* Adjust height as needed */}
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
          <div className="w-full h-96 mb-3"> {/* Adjust height as needed */}
            <Chart
              options={bubbleOptions}
              series={bubbleOptions.series}
              type="bubble"
              height="100%"
            />
          </div>
          <p className="font-bold" style={{ color: 'rgb(4, 33, 89)' }}>Department-wise Package Range</p>
        </div>
      </div>
    </div>
  );
};

export default PlacementCharts;