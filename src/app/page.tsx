'use client'
import { DayPicker } from "@/components/DayPicker/DayPicker";
import { Header } from "@/components/Header/Header";
import { WorkoutDay } from "@/components/WorkoutDay/WorkoutDay";

import { WORKOUT_DATA } from "@/consts/data";
import { ExerciseType, WorkoutDayType } from "@/types";
import { 
  savePickedDate,
  getPickedDate,
  saveWorkoutData,
  getWorkoutData
} from "@/utils/data-handlers";
import { getTodayDateString } from "@/utils/get-date";
import { useEffect, useState } from "react";


const WORKOUT_DATA_LS_KEY = 'workoutData';

const days = Object.keys(WORKOUT_DATA);

function mergeStoredData() {
  if (typeof window === 'undefined') {
    return;
  }

  const savedData = localStorage.getItem(WORKOUT_DATA_LS_KEY);
    if (savedData) {
      try {
        const savedDataObj = JSON.parse(savedData) as Record<string, WorkoutDayType>;
        for (const savedWorkoutDay in savedDataObj) {
          savedDataObj[savedWorkoutDay].exercises.forEach((exercise, index) => {
            WORKOUT_DATA[savedWorkoutDay].exercises[index].currentCircle = exercise.currentCircle;
            WORKOUT_DATA[savedWorkoutDay].exercises[index].isComplete = exercise.isComplete;
          })
        }
      } catch {}
    }
}

export default function Home() {
  const [ workoutData, setWorkoutData ] = useState(WORKOUT_DATA);

  const today = getTodayDateString();
  const [ currentDate, setCurrentDate ] = useState(today);

  const [ currentWorkout, setCurrentWorkout ] = useState(workoutData[currentDate]);

  useEffect(() => {
    const pickedDate = getPickedDate();
    if (pickedDate) {
      setCurrentDate(pickedDate);
    }

    const savedWorkoutData = getWorkoutData();
    if (savedWorkoutData) {
      console.log(savedWorkoutData);
      
      setWorkoutData({ ...savedWorkoutData });
      setCurrentWorkout({...workoutData[currentDate]});
    }
  }, []);

  function pickDate(date: string = today) {
    setCurrentDate(date);
    savePickedDate(date);
  }

  function handleExercisesChange(exercises: ExerciseType[]): void {
    const changedData = {
      ...WORKOUT_DATA,
      [currentDate]: {
        ...WORKOUT_DATA[currentDate],
        exercises,
      }
    }
    saveWorkoutData(changedData);
  }

  return (
    <>
      <Header />
      <main>
        <DayPicker
          days={days} 
          activeDay={currentDate}
          whenOptionPicked={pickDate}
        />
        <WorkoutDay
          workoutDayData={currentWorkout}
          whenExercisesChange={handleExercisesChange}
        />
      </main>
    </>
  )
}
