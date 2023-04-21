import { useState } from "react";
import { Team } from "../list/TeamList";
import TeamMember from "../member/TeamMember";
import TeamRole from "../role/TeamRole";
import "./TeamItem.scss";
import { buttonClasses } from "utils/classes";
import ApplyModal from "../action/ApplyModal";

interface TeamItemProps {
  team: Team;
}

const TeamItem: React.FC<TeamItemProps> = ({ team }) => {
  const { name, description, projectDescription, hashtags, roles, members } = team;
  const [showMore, setshowMore] = useState(false);

  return (
    <div className="flex flex-col gap-4 p-5 rounded-lg shadow-lg bg-gray-100">
      <div className="text-4xl font-bold uppercase">{name}</div>
      <div className="flex flex-wrap gap-4">
        {hashtags.map((tag, index) => (
          <div
            key={`hashtag-${index}`}
            className="p-1 italic border-box border-solid border-2 border-green-500 rounded-2xl"
          >
            #{tag}
          </div>
        ))}
      </div>
      <div>{description}</div>
      <div className="text-xl uppercase">Our project</div>
      <div className="">{projectDescription}</div>
      <div className="text-2xl font-bold">We are looking for</div>
      <div className="flex flex-wrap">
        {roles.map((role, index) => (
          <div key={`role-${index}`} className="basis-1/3 border-box p-5">
            <TeamRole role={role} />
          </div>
        ))}
      </div>

      {!showMore && (
        <button
          type="button"
          className={buttonClasses.join(" ")}
          data-ripple-light="true"
          onClick={() => setshowMore(true)}
        >
          Show More
        </button>
      )}

      {showMore && (
        <>
          <div className="text-2xl font-bold">Our team</div>
          <div className="flex flex-wrap">
            {members.map((member, index) => (
              <div key={`member-${index}`} className="basis-1/3 border-box">
                <TeamMember member={member} />
              </div>
            ))}
          </div>
          <div>
            <div className="text-2xl font-bold">Contact</div>
            <div>ouremail@email.com</div>
          </div>
          <ApplyModal />
          <div className="italic m-auto cursor-pointer" onClick={() => setshowMore(false)}>
            Collapse
          </div>
        </>
      )}
    </div>
  );
};

export default TeamItem;
