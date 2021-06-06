import styles from './App.module.css';
import Content from './components/Content/Content';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Dialogs from './components/Dialogs/Dialogs';

const App = () => {
  return (
    <div className={styles.app_wrapper}>
      <Navbar />
      <div className={styles.content}>
        <Dialogs />
      </div>
      {/* <Content /> */}
      <News />
    </div>
  );
}

export default App;
