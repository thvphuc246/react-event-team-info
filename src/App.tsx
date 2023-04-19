import React from "react";
import "./App.scss";
import TeamList from "components/team/list/TeamList";

function App() {
  return (
    <div className="m-8">
      <h1 className="text-8xl">JOIN A TEAM</h1>
      <p className="text-2xl">Apply for a role that suits you the most and join a team.</p>
      <TeamList />
    </div>
  );
}

export default App;
