import { PICKED_DATE_LS_KEY, WORKOUT_DATA_LS_KEY } from "@/consts/ls-keys";
import { WORKOUT_DATA } from "@/consts/data";
import { WorkoutData } from "@/types";

const checkIsClient = () => typeof window !== 'undefined';

export function savePickedDate(pickedDate: string) {
  if (!checkIsClient()) return;

  localStorage.setItem(PICKED_DATE_LS_KEY, pickedDate);
}

export function getPickedDate() {
  if (!checkIsClient()) return;

  return localStorage.getItem(PICKED_DATE_LS_KEY);
}

export function saveWorkoutData(data?: WorkoutData) {
  if (!checkIsClient()) return;
  const jsonData = JSON.stringify(data || WORKOUT_DATA);
  localStorage.setItem(WORKOUT_DATA_LS_KEY, jsonData);
}

export function getWorkoutData() {
  if (!checkIsClient()) return;

  const savedData = localStorage.getItem(WORKOUT_DATA_LS_KEY);

  if (!savedData) return;

  try {
    const parsedData: WorkoutData = JSON.parse(savedData);
    return parsedData;
  } catch(err) { 
    console.error(err);
    return null
   }
}
