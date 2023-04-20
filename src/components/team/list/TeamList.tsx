import TeamItem from "../item/TeamItem";
import { Member } from "../member/TeamMember";
import "./TeamList.scss";

export interface Team {
  name: string;
  description: string;
  projectDescription: string;
  hashtags: string[];
  roles: string[];
  members: Member[];
}

interface TeamListProps {
  data: Team[];
}

const TeamList: React.FC<TeamListProps> = ({ data }) => {
  return (
    <div className="m-8 flex flex-wrap">
      {data.map((item, index) => (
        <div key={`team-item-${index}`} className="flex-none basis-1/2 border-box p-5">
          <TeamItem team={item} />
        </div>
      ))}
    </div>
  );
};

export default TeamList;
