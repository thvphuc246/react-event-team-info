import TeamRole from "../role/TeamRole";
import "./TeamItem.scss";

interface Team {
  [key: string]: string | string[];
}

interface TeamItemProps {
  team: Team;
}

const TeamItem: React.FC<TeamItemProps> = ({ team }) => {
  const hashtags = team.hashtags as string[];
  const roles = team.roles as string[];

  return (
    <div className="flex flex-col gap-4 p-5 rounded-lg shadow-lg bg-gray-100">
      <div className="text-3xl font-bold uppercase">{team.name}</div>
      <div className="flex flex-wrap gap-4">
        {hashtags.map((tag) => (
          <div className="p-1 italic border-box border-solid border-2 border-green-500 rounded-2xl">
            #{tag}
          </div>
        ))}
      </div>
      <div>{team.description}</div>
      <div className="text-2xl">We are looking for</div>
      <div className="flex flex-wrap">
        {roles.map((role) => (
          <div className="basis-1/3 border-box p-5">
            <TeamRole role={role} />
          </div>
        ))}
      </div>
      <button
        type="button"
        className="w-fit m-auto rounded-lg bg-blue-500 py-3 px-6 text-l font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
        data-ripple-light="true"
      >
        Show More
      </button>
    </div>
  );
};

export default TeamItem;
