import { ComponentProps } from "react";
import "./App.css";
import Display from "./components/Display";
import Post from "./components/Post";
import Profile from "./components/Profile";

function App() {
  const post: ComponentProps<typeof Post>["post"] = {
    title: "some Title",
    content: "some Content",
  };

  return (
    <div>
      <Profile name="유진영" nickname="금쪽이" age={20} gender="male" />
      <Post post={post} />
      <Display>안녕~</Display>
    </div>
  );
}

export default App;
