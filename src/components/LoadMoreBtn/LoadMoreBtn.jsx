import styles from "./LoadMoreBtn.module.css"

const LoadMoreBtn = ({ onClick }) => (
    <button onClick={onClick} className={styles.loadMore}>Load More</button>
  );
  
  export default LoadMoreBtn;