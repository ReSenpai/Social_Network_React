import styles from './Content.module.css'
import Myposts from './Myposts/Myposts'

const Content = () => {
  return (
    <main className={styles.content}>
      Content
      <img src="http://fotorelax.ru/wp-content/uploads/2016/03/Beautiful-photos-and-pictures-on-various-subjects-01.jpg"></img>
      <Myposts />
    </main>
  );
}

export default Content;