import { useEffect, useState } from 'react';
import { fetchPlacementDrives } from '../services/drives.services';

const PlacementDrives = () => {
  const [placementDrives, setPlacementDrives] = useState([]);

  useEffect(() => {
    const getPlacementDrives = async () => {
      try {
        const placementDrivesData = await fetchPlacementDrives();
        setPlacementDrives(placementDrivesData);
      } catch (error) {
        console.error('Error fetching Placement Drives Data:', error);
      }
    };

    getPlacementDrives();
  }, []);

  return placementDrives; // Return the fetched data
};

export default PlacementDrives;