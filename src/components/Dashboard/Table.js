import React from 'react';

const Table = ({ bugReports }) => {
  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Bug Information</th>
            <th>Bug Type</th>
            <th>Drive Link</th>
            <th>Environment Description</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {bugReports.length > 0 ? (
            bugReports.map(report => (
              <tr key={report.id}>
                <td>{report.name}</td>
                <td>{report.email}</td>
                <td>{report.bug_information}</td>
                <td>{report.bug_type}</td>
                <td>
                  <a href={report.drive_link} target="_blank" rel="noopener noreferrer">
                    {report.drive_link}
                  </a>
                </td>
                <td>{report.environment_description}</td>
                <td>{new Date(report.timestamp?.seconds * 1000).toLocaleString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7} className="text-center">
                No bug reports available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
