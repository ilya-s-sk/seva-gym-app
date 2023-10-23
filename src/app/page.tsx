'use client'
import { DayPicker } from "@/components/DayPicker/DayPicker";
import { Header } from "@/components/Header/Header";
import { WorkoutDay } from "@/components/WorkoutDay/WorkoutDay";

import { WORKOUT_DATA } from "@/consts/data";
import { getTodayDateString } from "@/utils/get-date";
import { useState } from "react";

const days = Object.keys(WORKOUT_DATA);

export default function Home() {

  const today = getTodayDateString();
  const [ currentDate, setCurrentDate ] = useState(today);

  function pickDate(date: string = today) {
    setCurrentDate(date);
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
        <WorkoutDay workoutDayData={WORKOUT_DATA[currentDate]} />
      </main>
    </>
  )
}
