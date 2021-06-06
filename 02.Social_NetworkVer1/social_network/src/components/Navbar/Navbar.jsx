import styles from './Navbar.module.css'

const Navbar = (props) => {
  return (
  <nav className={styles.nav}>
    <div>
      <img src="" alt="Logo" />
    </div>
    <div>
      <a href='/Content'>Main</a>
    </div>
    <div>
      <a href='/Profile'>Profile</a>
    </div>
    <div>
      <a href='/Dialogs'>Messages</a>
    </div>
    <div>
      <a href='/Settings'>Settings</a>
    </div>
    <div>
      Avatar + Descrip
    </div>
  </nav>
  );
}

export default Navbar;