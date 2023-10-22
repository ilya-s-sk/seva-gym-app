import { FunctionComponent } from "react";
import { WorkoutDayType } from "@/types";
import { ExercisesList } from "../ExercisesList/ExercisesList";
import styles from './styles.module.css';

interface Props {
  workoutDayData: WorkoutDayType
}

export const WorkoutDay: FunctionComponent<Props> = ({ workoutDayData }) => {
  return (
    <section className={styles.workoutDay}>
      <p>{ workoutDayData.date }</p> 
      <h2 className={styles.title}>{ workoutDayData.title }</h2>
      <ExercisesList exercises={workoutDayData.exercises} />
    </section>
  )
}