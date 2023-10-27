'use client'
import { DayPicker } from "@/components/DayPicker/DayPicker";
import { Header } from "@/components/Header/Header";
import { WorkoutDay } from "@/components/WorkoutDay/WorkoutDay";

import { WORKOUT_DATA } from "@/consts/data";
import { WorkoutDayType, ExerciseType } from "@/types";
import { getTodayDateString } from "@/utils/get-date";
import { useEffect, useState } from "react";

const WORKOUT_DATA_LS_KEY = 'workoutData';

const days = Object.keys(WORKOUT_DATA);

export default function Home() {

  const today = getTodayDateString();
  const [ currentDate, setCurrentDate ] = useState(today);

  function pickDate(date: string = today) {
    setCurrentDate(date);
  }

  function handleExercisesChange(): void {
    localStorage.setItem(WORKOUT_DATA_LS_KEY, JSON.stringify(WORKOUT_DATA));
  }

  useEffect(() => {
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
  }, [])

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
          workoutDayData={WORKOUT_DATA[currentDate]}
          whenExercisesChange={handleExercisesChange}
        />
      </main>
    </>
  )
}
