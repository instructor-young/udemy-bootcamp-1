interface ProfileProps {
  name: string;
  nickname: string;
  age: number;
  gender: "male" | "female";
}

function Profile({ name, nickname, age, gender }: ProfileProps) {
  return <div>Profile</div>;
}

export default Profile;
