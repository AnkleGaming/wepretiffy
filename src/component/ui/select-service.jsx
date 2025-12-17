import React, { useState, useEffect } from "react";
import { Card, CardContent } from "../ui/card";
import GetServicesTab from "../../backend/selectcolor/getcolortab";
import Colors from "../../core/constant";

/* -------------------- Single Tab Item -------------------- */
const SelectTabItem = ({ label, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer flex flex-col items-center space-y-2 transition-all duration-300 hover:scale-105"
    >
      <Card
        className={`w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[60px] lg:h-[60px]
        rounded-xl overflow-hidden border flex items-center justify-center shadow-md hover:shadow-lg transition-all
        ${
          isActive
            ? `${Colors.bgGray} border-[#FA7D09] ring-2 ring-[#E56A00]`
            : `bg-white ${Colors.borderGray} hover:border-[#FA7D09]`
        }`}
      >
        <CardContent className="p-0 flex items-center justify-center w-full h-full">
          {/* Center text inside card */}
          <span
            className={`text-[12px] md:text-[13px] lg:text-[14px] font-semibold text-center
            ${isActive ? Colors.tableHeadText : Colors.textGrayDark}`}
          >
            {label}
          </span>
        </CardContent>
      </Card>

      <span
        className={`text-[10px] md:text-[11px] lg:text-[12px] font-medium text-center
        group-hover:${Colors.tableHeadText} transition-colors`}
      >
        {label}
      </span>
    </div>
  );
};

/* -------------------- Main Section -------------------- */
const SelectColorCardSection = ({
  subService,
  selectedSubService,
  onChangeSubService,
}) => {
  const [tabs, setTabs] = useState([]);
  const [selectedTabId, setSelectedTabId] = useState(null);

  useEffect(() => {
    const fetchTabs = async () => {
      try {
        const data = await GetServicesTab(subService?.id || 0);
        setTabs(data || []);

        // Auto-select first tab
        if (data.length > 0 && !selectedSubService) {
          setSelectedTabId(data[0].id);
          onChangeSubService(data[0]);
        }
      } catch (err) {
        console.error("Error fetching tabs", err);
      }
    };

    fetchTabs();
  }, [subService]);

  useEffect(() => {
    if (selectedSubService) {
      setSelectedTabId(selectedSubService.id);
    }
  }, [selectedSubService]);

  return (
    <div className="w-full sm:w-[350px] md:w-[300px] lg:w-[280px] mx-auto sm:mx-0 bg-white rounded-xl shadow-lg p-4 sm:p-6">
      <h1
        className={`text-[22px] md:text-[26px] lg:text-[28px] font-bold mb-4 ${Colors.textGrayDark}`}
      >
        Choose a tab
      </h1>

      <div className="grid grid-cols-4 sm:grid-cols-3 gap-3">
        {tabs.map((item) => (
          <SelectTabItem
            key={item.id}
            label={item.Tabname}
            isActive={selectedTabId === item.id}
            onClick={() => {
              setSelectedTabId(item.id);
              onChangeSubService(item);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectColorCardSection;
