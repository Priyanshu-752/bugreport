import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

import Header from './Header';
import Table from './Table';

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firestore';

const Dashboard = ({ setIsAuthenticated }) => {
  const [bugReports, setBugReports] = useState([]);

  const getBugReports = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'bugReports'));
      const reports = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBugReports(reports);
    } catch (error) {
      console.error('Error fetching bug reports:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to fetch data from Firestore. Please try again later.',
      });
    }
  };

  useEffect(() => {
    getBugReports();
  }, []);

  return (
    <div className="container">
      <Header setIsAuthenticated={setIsAuthenticated} />
      <Table bugReports={bugReports} />
    </div>
  );
};

export default Dashboard;
