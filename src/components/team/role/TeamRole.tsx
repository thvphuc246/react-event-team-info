import "./TeamRole.scss";

interface TeamRoleProps {
  role: string;
}

const TeamRole: React.FC<TeamRoleProps> = ({ role }) => {
  return <div className="p-5 rounded-lg border-solid border-2 border-sky-500">{role}</div>;
};

export default TeamRole;
