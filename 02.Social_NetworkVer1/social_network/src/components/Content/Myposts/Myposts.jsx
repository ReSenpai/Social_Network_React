import styles from './Myposts.module.css'
import Post from './Post/Post'

const Myposts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea name="" id="" cols="30" rows="10">Запись</textarea>
        <button>Добавить запись</button>
      </div>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Myposts;