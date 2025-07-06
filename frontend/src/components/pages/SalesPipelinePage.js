// src/components/pages/SalesPipelinePage.js
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./SalesPipelinePage.css";

const SalesPipelinePage = () => {
  const pipelineData = [
    { month: "Jan", value: 15000 },
    { month: "Feb", value: 22000 },
    { month: "Mar", value: 18000 },
    { month: "Apr", value: 25000 },
    { month: "May", value: 32000 },
    { month: "Jun", value: 28000 },
  ];

  const dealStages = [
    { stage: "Lead", count: 40 },
    { stage: "Contacted", count: 28 },
    { stage: "Proposal Sent", count: 18 },
    { stage: "Negotiation", count: 12 },
    { stage: "Closed Won", count: 8 },
    { stage: "Closed Lost", count: 6 },
  ];

  return (
    <div className="sales-pipeline-page">
      <h2>Sales Pipeline</h2>

      <div className="pipeline-chart-section">
        <h3>Monthly Pipeline Value</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={pipelineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis tickFormatter={(val) => `$${val / 1000}k`} />
            <Tooltip formatter={(value) => `$${value}`} />
            <Bar dataKey="value" fill="#004aad" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="pipeline-details-section">
        <h3>Pipeline Stage Breakdown</h3>
        <table className="pipeline-table">
          <thead>
            <tr>
              <th>Stage</th>
              <th>Deals</th>
            </tr>
          </thead>
          <tbody>
            {dealStages.map((stage, index) => (
              <tr key={index}>
                <td>{stage.stage}</td>
                <td>{stage.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesPipelinePage;
