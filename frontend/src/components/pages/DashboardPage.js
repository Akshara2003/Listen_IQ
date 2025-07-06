// src/components/pages/DashboardPage.js
import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import "./DashboardPage.css";

const DashboardPage = () => {
  const metrics = [
    { title: "Total Leads", value: "120" },
    { title: "In Progress Deals", value: "35" },
    { title: "Won Deals", value: "22" },
    { title: "Lost Deals", value: "13" },
    { title: "Estimated Pipeline", value: "$350,000" },
    { title: "Retained Leads", value: "75" },
    { title: "Tier Level", value: "Tier 3 ⭐" },
  ];

  const monthlyData = [
    { month: "Jan", value: 20000 },
    { month: "Feb", value: 30000 },
    { month: "Mar", value: 25000 },
    { month: "Apr", value: 40000 },
    { month: "May", value: 45000 },
    { month: "Jun", value: 48000 },
    { month: "Jul", value: 50000 },
  ];

  const funnelData = [
    { stage: "New", value: 120 },
    { stage: "In Progress", value: 60 },
    { stage: "Won", value: 30 },
    { stage: "Lost", value: 10 },
  ];

  const topDeals = [
    { name: "Client A", value: 85000 },
    { name: "Client B", value: 73000 },
    { name: "Client C", value: 64000 },
    { name: "Client D", value: 59000 },
    { name: "Client E", value: 51000 },
  ];

  const wonLostData = [
    { name: "Won", value: 30 },
    { name: "Lost", value: 10 },
  ];

  const funnelColors = ["#004aad", "#007bff", "#28a745", "#dc3545"];

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Partner Dashboard</h2>

      {/* Metric Cards */}
      <div className="card-grid">
        {metrics.map((metric, index) => (
          <div className="dashboard-card" key={index}>
            <h3>{metric.title}</h3>
            <p>{metric.value}</p>
          </div>
        ))}
      </div>

      {/* Line Chart */}
      <div className="chart-section">
        <h3>Sales Closed Over Time</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={monthlyData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis tickFormatter={(val) => `$${val / 1000}k`} />
            <Tooltip formatter={(value) => `$${value}`} />
            <Line type="monotone" dataKey="value" stroke="#004aad" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div className="chart-section">
        <h3>Pipeline Forecast</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlyData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis tickFormatter={(val) => `$${val / 1000}k`} />
            <Tooltip formatter={(value) => `$${value}`} />
            <Bar dataKey="value" fill="#004aad" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Deal Status Pie Chart */}
      <div className="chart-section">
        <h3>Deal Status Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={funnelData}
              dataKey="value"
              nameKey="stage"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {funnelData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={funnelColors[index % funnelColors.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${value} deals`} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Top Deals by Value */}
      <div className="chart-section">
        <h3>Top 5 Deals by Value</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            data={topDeals}
            layout="vertical"
            margin={{ top: 10, right: 30, left: 50, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" tickFormatter={(val) => `$${val / 1000}k`} />
            <YAxis dataKey="name" type="category" />
            <Tooltip formatter={(value) => `$${value}`} />
            <Bar dataKey="value" fill="#004aad" radius={[0, 6, 6, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Won vs Lost Pie Chart */}
      <div className="chart-section">
        <h3>Won vs Lost Rate</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={wonLostData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={90}
              label
            >
              <Cell key="won" fill="#28a745" />
              <Cell key="lost" fill="#dc3545" />
            </Pie>
            <Tooltip formatter={(value) => `${value} deals`} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardPage;
