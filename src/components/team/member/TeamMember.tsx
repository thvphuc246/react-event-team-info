import "./TeamMember.scss";

export interface Member {
  [key: string]: string;
}

interface TeamMemberProps {
  member: Member;
}

const TeamMember: React.FC<TeamMemberProps> = ({ member }) => {
  const { name, role } = member;
  return (
    <div className="flex flex-col items-center gap-1">
      <img
        className="max-w-[100px] max-h-[100px] w-full rounded-full bg-gray-200"
        src="https://cdn.onlinewebfonts.com/svg/img_212716.png"
        alt={name}
      ></img>
      <div className="font-bold text-xl">{name}</div>
      <div>{role}</div>
    </div>
  );
};

export default TeamMember;
