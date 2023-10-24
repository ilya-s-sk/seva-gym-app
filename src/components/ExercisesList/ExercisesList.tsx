import { FunctionComponent, useEffect, useState } from "react";
import { ExerciseType } from "@/types";
import { ExerciseItem } from "../ExerciseItem/ExerciseItem";
import styles from './styles.module.css'

interface Props {
  exercises: ExerciseType[];
}

export const ExercisesList: FunctionComponent<Props> = ({ exercises }) => {
  const [activeExercises, setActiveExercises] = useState(
    [...exercises].filter(({isComplete}) => !isComplete)
  );
  const [completedExercises, setCompletedExercises] = useState(
    [...exercises].filter(({isComplete}) => isComplete)
  );

  const sortedActiveExercises = [...activeExercises].sort((e1, e2) => e1.id - e2.id);

  useEffect(() => {
    setActiveExercises([...exercises].filter(({isComplete}) => !isComplete));
    setCompletedExercises([...exercises].filter(({isComplete}) => isComplete));
  }, [ exercises ])

  function toggleExerciseStatus(id: number, completed: boolean) {
    const targetToRemoving = completed ? activeExercises : completedExercises;
    const funcToRemoving = completed ? setActiveExercises : setCompletedExercises;
    const targetToAdding = completed ? completedExercises : activeExercises;
    const funcToAdding = completed ? setCompletedExercises : setActiveExercises

    const currentExercise = targetToRemoving.find((exercise) => exercise.id === id);
    if (currentExercise) {
      funcToRemoving(
        targetToRemoving.filter(exercise => exercise.id !== currentExercise.id)
      );
      funcToAdding(
        [...targetToAdding, currentExercise]
      );
    }
  }

  return (
    <>
      <ul className={styles.exercisesList}>
        {
          sortedActiveExercises.map((exercise) => (
            <ExerciseItem
              key={exercise.id}
              exercise={exercise}
              whenCompletedStatusChange={toggleExerciseStatus}
            />
          ))
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