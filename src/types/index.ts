export interface ExerciseType {
  title: string;
  circles: number;
  times: number | number[];
  weights: number[];
}

export interface WorkoutDayType {
  date: string;
  title: string;
  exercises: ExerciseType[];
}
