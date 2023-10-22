import { FunctionComponent } from "react";
import styles from './styles.module.css';

export const Header: FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <h1 className={styles.title}>
          Seva Gym App
        </h1>
      </div>
    </header>
  )
}