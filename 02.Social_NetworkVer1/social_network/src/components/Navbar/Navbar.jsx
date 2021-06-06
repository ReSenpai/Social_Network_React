import styles from './Navbar.module.css'

const Navbar = (props) => {
  return (
  <nav className={styles.nav}>
    <div>
      <img src="" alt="Logo" />
    </div>
    <div>
      <a>Main</a>
    </div>
    <div>
      <a>Profile</a>
    </div>
    <div>
      <a>Messages</a>
    </div>
    <div>
      <a>Settings</a>
    </div>
    <div>
      Avatar + Descrip
    </div>
  </nav>
  );
}

export default Navbar;