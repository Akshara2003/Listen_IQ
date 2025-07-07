// src/components/ContentTable.jsx
/*import React from 'react';

/**
 * rows example:
 * [
 *   { _id: 'brochure', count: 6 },
 *   { _id: 'ppt',       count: 3 }
 * ]
 */
/*const ContentTable = ({ rows = [] }) => (
  <div className="mt-8">
    <h3 className="text-lg font-semibold mb-3">Content Summary</h3>

    {rows.length === 0 ? (
      <p className="text-sm text-gray-500">No content data available.</p>
    ) : (
      <table className="min-w-full bg-white rounded shadow-sm">
        <thead className="bg-gray-100 text-left text-xs uppercase tracking-wider">
          <tr>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Files</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row._id} className="border-t">
              <td className="px-4 py-2 capitalize">{row._id}</td>
              <td className="px-4 py-2">{row.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
);

export default ContentTable;*/
import React from 'react';

const ContentTable = ({ rows = [] }) => (
  <div className="mt-8 w-full">
    <h3 className="text-xl font-semibold text-gray-800 mb-4"> Content Summary</h3>

    {rows.length === 0 ? (
      <div className="text-sm text-gray-500 bg-gray-50 p-4 rounded shadow-sm">
        No content data available.
      </div>
    ) : (
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full text-sm text-gray-800">
          <thead className="bg-blue-50 text-gray-600 uppercase text-xs tracking-wider">
            <tr>
              <th className="px-6 py-3 text-left">Category</th>
              <th className="px-6 py-3 text-left">Files</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {rows.map((row) => (
              <tr key={row._id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-3 capitalize font-medium">{row._id}</td>
                <td className="px-6 py-3">{row.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </div>
);

export default ContentTable;

