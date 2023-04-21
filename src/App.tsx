import React, { useState } from "react";
import "./App.scss";
import TeamList, { Team } from "components/team/list/TeamList";
import { mockData } from "assets/mockData";
import { searchBarInputClasses, searchBarLabelClasses } from "utils/classes";

const App = (): JSX.Element => {
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
