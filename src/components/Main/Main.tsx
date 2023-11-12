import { FunctionComponent, useEffect, useState } from "react";

import { DayPicker } from "@/components/DayPicker/DayPicker";
import { WorkoutDay } from "@/components/WorkoutDay/WorkoutDay";
import { WorkoutData } from "@/types";
import { STORAGE } from "@/utils/data-handlers";
import { getTodayDateString } from "@/utils/get-date";

interface Props {
  todayDate: string;
  workoutDays: string[];
  workoutData: WorkoutData;
}

export const Main: FunctionComponent<Props> = ({
  todayDate, workoutDays, workoutData
}) =>  {
  const [ currentDate, setCurrentDate ] = useState(todayDate);

  const currentWorkout = workoutData[currentDate];

  function pickDate(date: string = getTodayDateString()) {
    setCurrentDate(date);
    STORAGE.savePickedDate(date);
  }

  useEffect(() => {
    setCurrentDate(todayDate);
  }, [todayDate])

  return (
    <main>
      <DayPicker 
        activeDay={currentDate}
        days={workoutDays} 
        whenOptionPicked={pickDate}
      />
      <WorkoutDay 
        workoutDayData={currentWorkout}
      />
    </main>
  )
}