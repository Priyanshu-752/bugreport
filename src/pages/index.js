import React, { useState, useEffect } from 'react';

import Header from '../components/Header';
import Table from '../components/Table';

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../pages/api/firebase';

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
    }
  };

  useEffect(() => {
    getBugReports();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header setIsAuthenticated={setIsAuthenticated} />
      <div className="mx-2 py-5 ">
        <Table bugReports={bugReports} />
      </div>
    </div>
  );
};

export default Dashboard;
