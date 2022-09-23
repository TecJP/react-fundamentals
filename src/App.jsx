import { Header } from "./components/Header";

import styles from "./App.module.css";
import "./global.css";

import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="João Pedro"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iure amet fugiat, minima architecto alias tempore voluptatum quaerat harum possimus excepturi omnis animi ab non natus, officia earum? Rem, cupiditate?"
          />
          <Post
            author="Sandro Souza"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iure amet fugiat, minima architecto alias tempore voluptatum quaerat harum possimus excepturi omnis animi ab non natus, officia earum? Rem, cupiditate?"
          />
        </main>
      </div>
    </div>
  );
}
