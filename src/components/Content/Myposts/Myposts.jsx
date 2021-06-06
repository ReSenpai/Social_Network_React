import styles from './Myposts.module.css'
import Post from './Post/Post'

const Myposts = (props) => {
  return (
    <div>
      My posts
      <div>
        <textarea name="" id="" cols="30" rows="10">Запись</textarea>
        <button>Добавить запись</button>
      </div>
      <Post message='Hi! How are you?' likeCount='5'/>
      <Post message='It is my first post' likeCount='7'/>
    </div>
  );
}

export default Myposts;