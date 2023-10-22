'use client'
import { Header } from "@/components/Header/Header";
import { WorkoutDay } from "@/components/WorkoutDay/WorkoutDay";

import { data } from "@/consts/data";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <WorkoutDay workoutDayData={data['24-10']} />
      </main>
    </>
  )
}
