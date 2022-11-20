import styles from '../styles/pages/home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to the Dummy-site</h1>
      <button>
        <a href='/register'>Register</a>
      </button>
    </div>
  );
}
