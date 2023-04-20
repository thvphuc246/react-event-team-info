import { mockData } from "assets/mockData";
import TeamItem from "../item/TeamItem";
import "./TeamList.scss";

const TeamList = (): JSX.Element => {
  return (
    <div className="m-8 flex flex-wrap">
      {mockData.map((item) => (
        <div className="flex-auto basis-1/2 border-box p-5">
          <TeamItem team={item} />
        </div>
      ))}
    </div>
  );
};

export default TeamList;
