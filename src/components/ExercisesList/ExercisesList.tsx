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
  const [activeExercises, setActiveExercises] = useState(
    [...exercises].filter(({isComplete}) => !isComplete)
  );
  const [completedExercises, setCompletedExercises] = useState(
    [...exercises].filter(({isComplete}) => isComplete)
  );

  const sortedActiveExercises = [...activeExercises].sort((e1, e2) => e1.id - e2.id);

  function setExercisesLists(exercises: ExerciseType[]) {
    setActiveExercises([...exercises].filter(({isComplete}) => !isComplete));
    setCompletedExercises([...exercises].filter(({isComplete}) => isComplete));
  }

  useEffect(() => {
    setExercisesLists(exercises);
  }, [ exercises ])

  function toggleExerciseStatus(id: number, completed: boolean) {
    const newExercises = exercises.map(exercise => {
      if (exercise.id === id) {
        return {
          ...exercise,
          isComplete: completed,
        }
      }
      return exercise;
    });
    setExercisesLists(newExercises);
    whenExercisesChange(newExercises);
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
              whenCompletedStatusChange={toggleExerciseStatus}
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
                    whenCompletedStatusChange={toggleExerciseStatus}
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