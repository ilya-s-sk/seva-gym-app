import { FunctionComponent, useState, Fragment } from "react";
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
      <div className={styles.circlesBlock}>
        <p>Подходы: <span className={styles.activeCircle}>{ currentCircle }</span> / {exercise.circles || 0}</p>
        <button className={styles.increaseButton} onClick={increaseCircle}>-</button>
        <button className={styles.button} onClick={setNextCircle}>+</button>
      </div>

      {
        exercise.parts.map((part, index) => (
          <Fragment key={index}>
            <p className={styles.title}>{part.title}</p>

            <div className={styles.subBlock}>
              <p className={styles.subBlockTitle}>Повторения:</p>
              <p className={styles.times}>
                {
                  typeof part.times === 'number'
                    ? ( <span className={styles.active}>{part.times}</span> )
                    : part.times.map((time, ind) => (
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
                  part.weights.map((weight, ind) => (
                    <span
                      key={ind}
                      className={
                        ind + 1 === currentCircle || (ind === part.weights.length - 1 && currentCircle > ind) 
                        ? styles.active 
                        : ''
                      }
                    >{weight}</span>
                  ))
                }
              </p>
            </div>
          </Fragment>
        ))
      }
    </li>
  )
}