import { FunctionComponent } from "react";
import SevaImg from '../../../public/seva.jpeg';
import styles from './styles.module.css';

export const Header: FunctionComponent = () => {
  function speak() {
    alert('Ну что, размялись?');
  }

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <h1 className={styles.title}>
          Seva Gym App
        </h1>
        <button className={styles.button} onClick={speak}>
          <img 
            className={styles.image}
            src={SevaImg.src}
            alt="Сева"
            width="80px" 
          />
        </button>
      </div>
    </header>
  )
}