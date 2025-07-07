// src/components/Card.jsx
import React from 'react';

/**
 * Simple KPI card
 * @param {string} title  – label shown on top
 * @param {number|string} value – big value below
 */
const Card = ({ title, value }) => (
  <div className="bg-white shadow-sm rounded-lg p-4 flex flex-col">
    <span className="text-xs font-medium text-gray-500">{title}</span>
    <span className="text-2xl font-bold mt-2">{value ?? 0}</span>
  </div>
);

export default Card;
