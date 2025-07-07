import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/SideBar/SideBar";
import AddPartner from "../../components/AddPartner";
import PartnerTable from "../../components/PartnerTable";
import FilterByMonthYear from "../../components/FilterByMonthYear";

const PartnerManagement = () => {
  const [filter, setFilter] = useState({ month: "", year: "" });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header at the top */}
      <Header />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar with fixed width and no shrink */}
        <div className="w-60 flex-shrink-0">
          <Sidebar role="admin" />
        </div>

        {/* Main content area with table scrolling */}
        <div className="flex-1 p-6 overflow-auto">
          {/* Top bar: AddPartner on left, Filter on right */}
          <div className="flex justify-between items-center mb-4">
            <AddPartner />
            <FilterByMonthYear onFilter={setFilter} />
          </div>

          {/* Partner Table */}
          <div className="overflow-x-auto">
            <PartnerTable filter={filter} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerManagement;
