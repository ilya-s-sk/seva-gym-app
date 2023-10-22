import { FunctionComponent, useState } from "react";
import { ExerciseType } from "@/types";
import styles from './styles.module.css';

interface Props {
  exercise: ExerciseType
}

export const ExerciseItem: FunctionComponent<Props> = ({ exercise }) => {

  const [ currentCircle, setCurrentCirle ] = useState(1);

  function setNextCircle() {
    if (currentCircle < exercise.circles) {
      setCurrentCirle(currentCircle + 1);
    }
  }

  function increaseCircle() {
    if (currentCircle > 1) {
      setCurrentCirle(currentCircle - 1);
    }
  }

  return (
    <li className={styles.exerciseItem}>
      <p className={styles.title}>{exercise.title}</p>
      <div className={styles.circlesBlock}>
        <p>Подходы: <span className={styles.activeCircle}>{ currentCircle }</span> / {exercise.circles || 0}</p>
        <button className={styles.increaseButton} onClick={increaseCircle}>-</button>
      </div>
      <button className={styles.button} onClick={setNextCircle}>
        +
      </button>
      <div className={styles.subBlock}>
        <p className={styles.subBlockTitle}>Повторения:</p>
        <p className={styles.times}>
          {
            typeof exercise.times === 'number'
              ? ( <span className={styles.active}>{exercise.times}</span> )
              : exercise.times.map((time, ind) => (
                <span
                  key={ind}
                  className={ind + 1 === currentCircle ? styles.active : ''}
                >{time}</span>
              ))
          }
        </p>
      </div>
      <div className={styles.subBlock}>
        <p className={styles.subBlockTitle}>Вес:</p>
        <p className={styles.weights}>
          {
            exercise.weights.map((weight, ind) => (
              <span
                key={ind}
                className={(ind + 1 === currentCircle || ind === exercise.weights.length - 1 && currentCircle > ind ) ? styles.active : ''}
              >{weight}</span>
            ))
          }
        </p>
      </div>
    </li>
  )
}