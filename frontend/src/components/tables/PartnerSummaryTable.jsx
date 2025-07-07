// src/components/PartnerSummaryTable.jsx


/**
 * import React from 'react';
 * rows example:
 * [
 *   {
 *     partnerName: 'ABC Corp',
 *     tier:        'Gold',
 *     activeDeals: 4,
 *     wonDeals:    2
 *   },
 *   ...
 * ]
 */
/*const PartnerSummaryTable = ({ rows = [] }) => (
  <div className="mt-8">
    <h3 className="text-lg font-semibold mb-3">Partner Summary</h3>

    {rows.length === 0 ? (
      <p className="text-sm text-gray-500">No partner data available.</p>
    ) : (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow-sm">
          <thead className="bg-gray-100 text-left text-xs uppercase tracking-wider">
            <tr>
              <th className="px-4 py-2">Partner</th>
              <th className="px-4 py-2">Tier</th>
              <th className="px-4 py-2">Active Deals</th>
              <th className="px-4 py-2">Won Deals</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} className="border-t">
                <td className="px-4 py-2">{row.partnerName}</td>
                <td className="px-4 py-2">{row.tier}</td>
                <td className="px-4 py-2">{row.activeDeals}</td>
                <td className="px-4 py-2">{row.wonDeals}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </div>
);

export default PartnerSummaryTable;*/
import React from 'react';

const statusBadge = (status) =>
  status === 'active'
    ? 'inline-block px-2 py-0.5 text-xs bg-green-100 text-green-700 rounded'
    : 'inline-block px-2 py-0.5 text-xs bg-red-100 text-red-700 rounded';

const PartnerListTable = ({ rows = [] }) => (
  <div className="mt-8">
    <h3 className="text-xl font-semibold mb-4">Partner List</h3>

    {rows.length === 0 ? (
      <p className="text-sm text-gray-500">No partners found.</p>
    ) : (
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full text-sm text-gray-800">
          <thead className="bg-blue-50 text-gray-600 uppercase text-xs tracking-wider">
            <tr>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Tier</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Last&nbsp;Login</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {rows.map((p) => (
              <tr key={p._id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">{p.name}</td>
                <td className="px-4 py-3">{p.tier}</td>
                <td className="px-4 py-3">
                  <span className={statusBadge(p.status)}>{p.status}</span>
                </td>
                <td className="px-4 py-3">{p.contactEmail || '-'}</td>
                <td className="px-4 py-3">
                  {p.lastLogin ? new Date(p.lastLogin).toLocaleDateString() : '-'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </div>
);

export default PartnerListTable;
