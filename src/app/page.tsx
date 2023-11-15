'use client'
import { useEffect, useState } from "react";
import { isEqual, merge } from "lodash"
import { Header } from "@/components/Header/Header";
import { Main } from "@/components/Main/Main";
import { WORKOUT_DATA } from "@/consts/data";
import { getTodayDateString } from "@/utils/get-date";
import { STORAGE } from "@/utils/data-handlers";

const todayDate = getTodayDateString();

const days = Object.keys(WORKOUT_DATA).reverse();

export default function Home() {
  const [initDate, setInitDate] = useState(todayDate);
  const [initWorkoutData, setInitWorkoutData] = useState(WORKOUT_DATA);

  useEffect(() => {
    const storedDate = STORAGE.getPickedDate();
    if (!storedDate) {
      STORAGE.savePickedDate(initDate);
    } else if (storedDate !== initDate) {
      setInitDate(storedDate)
    }

    const storedWorkoutData = STORAGE.getWorkoutData();
    if (!storedWorkoutData) {
      STORAGE.saveWorkoutData(initWorkoutData);
    } else if (!isEqual(storedWorkoutData, initWorkoutData)) {
      const mergedData = merge(storedWorkoutData, initWorkoutData);

      setInitWorkoutData(mergedData);
      STORAGE.saveWorkoutData(mergedData);
    }
  }, []);

  return (
    <>
      <Header />
      <Main
        todayDate={initDate}
        workoutDays={days}
        workoutData={initWorkoutData}
      />
    </>
  )
}
