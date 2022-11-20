import styles from '../styles/Home.module.css';

export default function TestComponent({ buttonText }) {
  const onClick = () => {
    let x = document.cookie;

    console.log('from the button :');
    console.log(x);
  };

  return (
    <div className={styles.container}>
      <button onClick={onClick}>{buttonText || ' Press me gently'}</button>
    </div>
  );
}
