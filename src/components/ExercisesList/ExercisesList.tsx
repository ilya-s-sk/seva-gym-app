import { FunctionComponent } from "react";
import { ExerciseType } from "@/types";
import { ExerciseItem } from "../ExerciseItem/ExerciseItem";
import styles from './styles.module.css'

interface Props {
  exercises: ExerciseType[];
}

export const ExercisesList: FunctionComponent<Props> = ({ exercises }) => {
  return (
    <ul className={styles.exercisesList}>
      {
        exercises.map((exercise) => (
          <ExerciseItem key={exercise.id} exercise={exercise} />
        ))
      }
    </ul>
  )
}