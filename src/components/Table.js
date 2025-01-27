import React from 'react';

const Table = ({ bugReports }) => {
  return (
    <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
      <table className="min-w-full bg-white divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Name</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Email</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Bug Information</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Bug Type</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Drive Link</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Environment Description</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Timestamp</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {bugReports.length > 0 ? (
            bugReports.map((report) => (
              <tr key={report.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 text-sm text-gray-900">{report.name}</td>
                <td className="px-4 py-2 text-sm text-gray-900">{report.email}</td>
                <td className="px-4 py-2 text-sm text-gray-900">{report.bug_information}</td>
                <td className="px-4 py-2 text-sm text-gray-900">{report.bug_type}</td>
                <td className="px-4 py-2 text-sm text-blue-500 underline">
                  <a href={report.drive_link} target="_blank" rel="noopener noreferrer">
                    {report.drive_link}
                  </a>
                </td>
                <td className="px-4 py-2 text-sm text-gray-900">{report.environment_description}</td>
                <td className="px-4 py-2 text-sm text-gray-900">
                  {new Date(report.timestamp?.seconds * 1000).toLocaleString()}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7} className="px-4 py-2 text-center text-sm text-gray-500">
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
