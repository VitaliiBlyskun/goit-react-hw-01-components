import { User } from "./socialProfile/userProfile";
import user from "./socialProfile/user.json";

export const App = () => {
  return (
    <>
      <User user={user}/>
    </>
  );
};

