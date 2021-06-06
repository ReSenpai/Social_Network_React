import styles from './Navbar.module.css'

const Navbar = () => {
  return <nav className={styles.nav}>
    <div>
      <a>Logo</a>
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
}

export default Navbar;