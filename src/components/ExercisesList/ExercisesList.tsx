import { FunctionComponent, useEffect, useState } from "react";
import { ExerciseType } from "@/types";
import { ExerciseItem } from "../ExerciseItem/ExerciseItem";
import styles from './styles.module.css'

interface Props {
  exercises: ExerciseType[];
  whenExercisesChange: (exercises: ExerciseType[]) => void;
}

export const ExercisesList: FunctionComponent<Props> = ({ 
  exercises,
  whenExercisesChange,
}) => {
  const [ statedExercises, setStatedExercises ] = useState(exercises);

  const activeExercises = statedExercises.filter(({isComplete}) => !isComplete);
  const completedExercises = statedExercises.filter(({isComplete}) => isComplete);

  const sortedActiveExercises = [...activeExercises].sort((e1, e2) => e1.id - e2.id);

  useEffect(() => {
    setStatedExercises(exercises);
  }, [ exercises ])

  function handleExerciseChange(id: number, newExercise: Partial<ExerciseType>) {
    const needToUpdateLists = 'isComplete' in newExercise;

    if (needToUpdateLists) {
      setStatedExercises([...exercises]);
    }
    
    whenExercisesChange(exercises);
  }

  return (
    <>
      <ul className={styles.exercisesList}>
        {
          !!sortedActiveExercises.length 
          ? sortedActiveExercises.map((exercise) => (
            <ExerciseItem
              key={exercise.id}
              exercise={exercise}
              whenExersiceChange={handleExerciseChange}
            />
          ))
          : (
            <h3 className={styles.endTitle}>Славная была тренировка!</h3>
          )
        }
      </ul>
      {
        !!completedExercises.length && (
          <section className={styles.completedSection}>
            <h3 className={styles.completedTitle}>Завершено:</h3>
            <ul className={styles.completedList}>
              {
                completedExercises.map((exercise) => (
                  <ExerciseItem
                    key={exercise.id}
                    exercise={exercise}
                    whenExersiceChange={handleExerciseChange}
                  />
                ))
              }
            </ul>
          </section>
        )
      }
    </>
  )
}