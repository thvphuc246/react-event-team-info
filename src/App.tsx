import React, { useState } from "react";
import "./App.scss";
import TeamList, { Team } from "components/team/list/TeamList";
import { mockData } from "assets/mockData";

const App = (): JSX.Element => {
  const searchBarInputClasses = [
    "peer",
    "h-full",
    "w-full",
    "rounded-[7px]",
    "border",
    "border-blue-gray-200",
    "border-t-transparent",
    "bg-transparent",
    "px-3",
    "py-2.5",
    "text-sm",
    "font-normal",
    "text-blue-gray-700",
    "outline",
    "outline-0",
    "transition-all",
    "placeholder-shown:border",
    "placeholder-shown:border-blue-gray-200",
    "placeholder-shown:border-t-blue-gray-200",
    "focus:border-2",
    "focus:border-blue-500",
    "focus:border-t-transparent",
    "focus:outline-0",
    "disabled:border-0",
    "disabled:bg-blue-gray-50",
  ];
  const searchBarLabelClasses = [
    "before:content[' ']",
    "after:content[' ']",
    "pointer-events-none",
    "absolute",
    "left-0",
    "-top-1.5",
    "flex",
    "h-full",
    "w-full",
    "select-none",
    "text-[11px]",
    "font-normal",
    "leading-tight",
    "text-blue-gray-400",
    "transition-all",
    "before:pointer-events-none",
    "before:mt-[6.5px]",
    "before:mr-1",
    "before:box-border",
    "before:block",
    "before:h-1.5",
    "before:w-2.5",
    "before:rounded-tl-md",
    "before:border-t",
    "before:border-l",
    "before:border-blue-gray-200",
    "before:transition-all",
    "after:pointer-events-none",
    "after:mt-[6.5px]",
    "after:ml-1",
    "after:box-border",
    "after:block",
    "after:h-1.5",
    "after:w-2.5",
    "after:flex-grow",
    "after:rounded-tr-md",
    "after:border-t",
    "after:border-r",
    "after:border-blue-gray-200",
    "after:transition-all",
    "peer-placeholder-shown:text-sm",
    "peer-placeholder-shown:leading-[3.75]",
    "peer-placeholder-shown:text-blue-gray-500",
    "peer-placeholder-shown:before:border-transparent",
    "peer-placeholder-shown:after:border-transparent",
    "peer-focus:text-[11px]",
    "peer-focus:leading-tight",
    "peer-focus:text-blue-500",
    "peer-focus:before:border-t-2",
    "peer-focus:before:border-l-2",
    "peer-focus:before:border-blue-500",
    "peer-focus:after:border-t-2",
    "peer-focus:after:border-r-2",
    "peer-focus:after:border-blue-500",
    "peer-disabled:text-transparent",
    "peer-disabled:before:border-transparent",
    "peer-disabled:after:border-transparent",
    "peer-disabled:peer-placeholder-shown:text-blue-gray-500",
  ];
  const [visibleData, setVisibleData] = useState<Team[]>(mockData);

  const handleSearchBar = (value: string) => {
    const filteredData = mockData.filter(
      (data) =>
        data.hashtags.join(",").toLowerCase().includes(value.toLowerCase()) ||
        data.roles.join(",").toLowerCase().includes(value.toLowerCase())
    );
    setVisibleData(value.length > 0 ? filteredData : mockData);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex-auto m-12 mb-">
        <h1 className="text-8xl">JOIN A TEAM</h1>
        <p className="text-2xl">Apply for a role that suits you the most and join a team.</p>
      </div>
      <div className="flex-auto mx-12">
        <div className="relative h-10 min-w-[200px]">
          <input
            className={searchBarInputClasses.join(" ")}
            placeholder=" "
            onChange={(e) => handleSearchBar(e.target.value)}
          />
          <label className={searchBarLabelClasses.join(" ")}>Search role & challenge</label>
        </div>
      </div>
      <TeamList data={visibleData} />
    </div>
  );
};

export default App;
