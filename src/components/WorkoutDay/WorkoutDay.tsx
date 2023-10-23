import { FunctionComponent } from "react";
import { WorkoutDayType } from "@/types";
import { ExercisesList } from "../ExercisesList/ExercisesList";
import styles from './styles.module.css';

interface Props {
  workoutDayData: WorkoutDayType | undefined
}

export const WorkoutDay: FunctionComponent<Props> = ({ workoutDayData }) => {
  return (
    <section className={styles.workoutDay}>
      {
        workoutDayData
          ? (
            <>
              <p>{workoutDayData.date}</p>
              <h2 className={styles.title}>{workoutDayData.title}</h2>
              <ExercisesList exercises={workoutDayData.exercises} />
            </>
          )
          :
          (
            <>
              <h2>Сегодня можно чиллить</h2>
              <p>Тренировки нет</p>
            </>
          )
      }
    </section >
  )
}