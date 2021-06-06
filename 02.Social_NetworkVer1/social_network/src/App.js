import styles from './App.module.css';
import Content from './components/Content/Content';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';

const App = () => {
  return (
    <div className={styles.app_wrapper}>
      <Navbar />
      <Content />
      <News />
    </div>
  );
}

export default App;
