import { isEqual, merge } from "lodash"
import { PICKED_DATE_LS_KEY, WORKOUT_DATA_LS_KEY } from "@/consts/ls-keys";
import { WORKOUT_DATA } from "@/consts/data";
import { WorkoutData, DeepPartial } from "@/types";

const checkIsClient = () => typeof window !== 'undefined';

function savePickedDate(pickedDate: string) {
  if (!checkIsClient()) return;

  localStorage.setItem(PICKED_DATE_LS_KEY, pickedDate);
}

function getPickedDate() {
  if (!checkIsClient()) return;

  return localStorage.getItem(PICKED_DATE_LS_KEY);
}

function saveWorkoutData(data: DeepPartial<WorkoutData>) {
  if (!checkIsClient()) return;

  const oldData = getWorkoutData();

  if (oldData && !isEqual(oldData, data)) {
    data = merge(oldData, data);
  }

  const jsonData = JSON.stringify(data);
  localStorage.setItem(WORKOUT_DATA_LS_KEY, jsonData);
}

function getWorkoutData() {
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

export const STORAGE = {
  savePickedDate,
  getPickedDate,
  saveWorkoutData,
  getWorkoutData,
}
