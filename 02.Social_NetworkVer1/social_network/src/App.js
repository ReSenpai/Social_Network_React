import styles from './App.module.css';
import Content from './components/Content/Content';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from './components/Content/Profile/Profile';
import Settings from './components/Content/Settings/Settings';

const App = () => {
  return (
    <Router>
      <div className={styles.app_wrapper}>
        <Navbar />
        <div className={styles.content}>
          <Route path='/'>
            <Content />
          </Route>
          <Route path='/Content'>
            <Content />
          </Route>
          <Route path='/Profile'>
            <Profile />
          </Route>
          <Route path='/Dialogs'>
            <Dialogs />
          </Route>
          <Route path='/Settings'>
            <Settings />
          </Route>
        </div>
        <News />
      </div>
    </Router>
  );
}

export default App;
