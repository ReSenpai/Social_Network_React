import styles from "./App.module.css";
import Content from "./components/Content/Content";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Dialogs from "./components/Dialogs/Dialogs";
import { Switch, Route } from "react-router-dom";
import Profile from "./components/Content/Profile/Profile";
import Settings from "./components/Content/Settings/Settings";

const App = () => {
  return (
    <div className={styles.app_wrapper}>
      <Navbar />
      <div className={styles.content}>
        <Switch>
          <Route path="/Content">
            <Content />
          </Route>
          <Route path="/Profile">
            <Profile />
          </Route>
          <Route path="/Dialogs">
            <Dialogs />
          </Route>
          <Route path="/Settings">
            <Settings />
          </Route>
          <Route path="/">
            <Content />
          </Route>
        </Switch>
      </div>
      <News />
    </div>
  );
};

export default App;
