import { FunctionComponent } from "react";
import { WorkoutDayType, ExerciseType } from "@/types";
import { ExercisesList } from "../ExercisesList/ExercisesList";
import styles from './styles.module.css';

interface Props {
  workoutDayData: WorkoutDayType | undefined;
  whenExercisesChange: (exercises: ExerciseType[]) => void;
}

export const WorkoutDay: FunctionComponent<Props> = ({ 
  workoutDayData,
  whenExercisesChange

}) => {
  return (
    <section className={styles.workoutDay}>
      {
        workoutDayData
          ? (
            <>
              <p>{workoutDayData.date}</p>
              <h2 className={styles.title}>{workoutDayData.title}</h2>
              <ExercisesList
                exercises={workoutDayData.exercises} 
                whenExercisesChange={whenExercisesChange}
              />
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