import styles from './Post.module.css'

const Post = (props) => {
  return (
    <div>
      <img src="" alt="Avatar" />
      <p>{props.message}</p>
      <div>
        {props.like} likes
      </div>
    </div>
  );
}

export default Post;