import React, { useState } from "react";

const FilterByMonthYear = ({ onFilter }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const months = [
    { value: "", label: "All Months" },
    { value: "01", label: "January" },
    { value: "02", label: "February" },
    { value: "03", label: "March" },
    { value: "04", label: "April" },
    { value: "05", label: "May" },
    { value: "06", label: "June" },
    { value: "07", label: "July" },
    { value: "08", label: "August" },
    { value: "09", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
  ];

  const years = [];
  const currentYear = new Date().getFullYear();
  for (let y = currentYear; y >= currentYear - 10; y--) {
    years.push(y);
  }

  const handleApplyFilter = () => {
    if (onFilter) onFilter({ month: selectedMonth, year: selectedYear });
    setShowFilter(false);
  };

  return (
    <div className="mt-4">
      <button
        onClick={() => setShowFilter((prev) => !prev)}
        className="bg-cyan-600 text-white px-4 py-2 rounded text-xl"
      >
        Filter
      </button>

      {showFilter && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <div className="bg-white shadow p-6 rounded w-1/3 relative">
            {/* Close (X) Button */}
            <button
              onClick={() => setShowFilter(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
            >
              &times;
            </button>

            <h2 className="text-lg font-bold mb-4 text-center">Filter by Month & Year</h2>

            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="border px-3 py-2 rounded w-full mb-4"
            >
              {months.map((month) => (
                <option key={month.value} value={month.value}>
                  {month.label}
                </option>
              ))}
            </select>

            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="border px-3 py-2 rounded w-full mb-4"
            >
              <option value="">All Years</option>
              {years.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>

            <button
              onClick={handleApplyFilter}
              className="bg-green-500 text-white px-4 py-2 rounded w-full"
            >
              Apply Filter
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterByMonthYear;
