import React, { useEffect, useState } from "react";
import axios from "axios";

const PartnerTable = ({ filter }) => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    fetchPartners();
  }, [filter]);

  const fetchPartners = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:7002/api/admin/partners", {
        params: filter,
        headers: { Authorization: `Bearer ${token}` },
      });

      setPartners(res.data);
    } catch (err) {
      console.error("Error fetching partners:", err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure to delete this partner?")) return;
    try {
      await axios.delete(`http://localhost:7002/api/admin/partners/${id}`);
      setPartners((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const toggleStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === "Active" ? "Inactive" : "Active";
    try {
      await axios.patch(`http://localhost:7002/api/admin/partners/${id}/status`, { status: newStatus });
      setPartners((prev) =>
        prev.map((p) => (p._id === id ? { ...p, status: newStatus } : p))
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="overflow-x-auto overflow-y-auto max-h-[500px]">
      <table className="min-w-full bg-white border border-gray-300">
        <thead className="sticky top-0 bg-gray-200">
          <tr>
            <th className="py-2 px-4 border">Partner Name</th>
            <th className="py-2 px-4 border">Contact Person</th>
            <th className="py-2 px-4 border">Email</th>
            <th className="py-2 px-4 border">Phone</th>
            <th className="py-2 px-4 border">Tier</th>
            <th className="py-2 px-4 border">Status</th>
            <th className="py-2 px-4 border">Date Joined</th>
            <th className="py-2 px-4 border">Last Activity</th>
            <th className="py-2 px-4 border">Total Leads</th>
            <th className="py-2 px-4 border">Deals Closed</th>
            <th className="py-2 px-4 border">Pipeline Value</th>
            <th className="py-2 px-4 border">Win Rate</th>
            <th className="py-2 px-4 border">Region</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {partners.map((partner) => (
            <tr key={partner._id} className="text-center">
              <td className="py-2 px-4 border">{partner.username}</td>
              <td className="py-2 px-4 border">{partner.contactPerson}</td>
              <td className="py-2 px-4 border">{partner.email}</td>
              <td className="py-2 px-4 border">{partner.phone || "-"}</td>
              <td className="py-2 px-4 border">{partner.tier}</td>
              <td className="py-2 px-4 border">
                <button
                  onClick={() => toggleStatus(partner._id, partner.status)}
                  className={`px-2 py-1 rounded ${
                    partner.status === "Active" ? "bg-green-200" : "bg-red-200"
                  }`}
                >
                  {partner.status}
                </button>
              </td>
              <td className="py-2 px-4 border">{partner.dateJoined}</td>
              <td className="py-2 px-4 border">{partner.lastActivity}</td>
              <td className="py-2 px-4 border">{partner.totalLeads}</td>
              <td className="py-2 px-4 border">{partner.dealsClosed}</td>
              <td className="py-2 px-4 border">{partner.pipelineValue}</td>
              <td className="py-2 px-4 border">{partner.winRate}%</td>
              <td className="py-2 px-4 border">{partner.region || "-"}</td>
              <td className="py-2 px-4 border">
                <div className="flex flex-wrap justify-center gap-2">
                  <button className="bg-blue-500 text-white px-2 py-1 rounded w-20">View</button>
                  <button className="bg-yellow-500 text-white px-2 py-1 rounded w-20">Edit</button>
                </div>
                <div className="flex flex-wrap justify-center gap-2 mt-2">
  <button
    onClick={() => toggleStatus(partner._id, partner.status)}
    className="bg-purple-500 text-white px-2 py-1 rounded w-24 text-sm"
  >
    {partner.status === "Active" ? "Deactivate" : "Activate"}
  </button>
  <button className="bg-gray-500 text-white px-2 py-1 rounded w-24 text-sm">
    Reset
  </button>
</div>

<div className="flex justify-center mt-2">
  <button
    onClick={() => handleDelete(partner._id)}
    className="bg-red-500 text-white px-2 py-1 rounded w-44 text-sm"
  >
    Delete
  </button>
</div>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PartnerTable;
