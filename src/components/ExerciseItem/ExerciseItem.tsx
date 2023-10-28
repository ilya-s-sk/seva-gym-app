import { FunctionComponent, useState, Fragment, useEffect } from "react";
import { ExerciseType } from "@/types";
import styles from './styles.module.css';

interface Props {
  exercise: ExerciseType;
  whenExersiceChange: (id: number, exercise: Partial<ExerciseType>) => void;
}

export const ExerciseItem: FunctionComponent<Props> = ({
  exercise, whenExersiceChange
}) => {

  const [currentCircle, setCurrentCirle] = useState(exercise.currentCircle || 1);

  function setNextCircle() {
    if (currentCircle < exercise.circles) {
      const changedCircle = currentCircle + 1;
      setCurrentCirle(changedCircle);
      exercise.currentCircle = changedCircle;
      whenExersiceChange(exercise.id, {
        currentCircle: exercise.currentCircle,
      });
    }
  }

  function decreaseCircle() {
    if (currentCircle > 1) {
      const changedCircle = currentCircle - 1;
      setCurrentCirle(changedCircle);
      exercise.currentCircle = changedCircle;
      whenExersiceChange(exercise.id, {
        currentCircle: exercise.currentCircle,
      });
    }
  }

  function handleCompletedStatusChange() {
    exercise.isComplete = !Boolean(exercise.isComplete);
    whenExersiceChange(exercise.id, {
      isComplete: exercise.isComplete,
    });
  }

  return (
    <li className={`${styles.exerciseItem} ${exercise.isComplete ? styles.completed : ''}`}>
      <div className={styles.header}>

        <input
          className={styles.completeCheckbox}
          checked={Boolean(exercise.isComplete)}
          type="checkbox"
          name="complete-exercise"
          id="exercise"
          onChange={handleCompletedStatusChange}
        />

        <p>{exercise.id}</p>
      </div>
      <div className={styles.circlesBlock}>
        <p>Подходы: <span className={styles.activeCircle}>{currentCircle}</span> / {exercise.circles || 0}</p>
        <button className={styles.increaseButton} onClick={decreaseCircle}>-</button>
        <button className={styles.button} onClick={setNextCircle}>+</button>
      </div>

      {
        exercise.parts.map((part, index) => (
          <div className={styles.exercisePart} key={index}>
            <p className={styles.title}>{part.title}</p>

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

            <div className={styles.subBlock}>
              <p className={styles.subBlockTitle}>Повторения:</p>
              <p className={styles.times}>
                {
                  typeof part.times === 'number'
                    ? (<span className={styles.active}>{part.times}</span>)
                    : part.times.map((time, ind) => (
                      <span
                        key={ind}
                        className={ind + 1 === currentCircle ? styles.active : ''}
                      >{time}</span>
                    ))
                }
              </p>
            </div>
          </div>
        ))
      }
    </li>
  )
}