export interface ExerciseType {
  id: number;
  circles: number;
  currentCircle?: number;
  isComplete?: boolean;
  parts: {
    title: string;
    times: string | number | number[];
    weights?: number[];
  }[]
}

export interface WorkoutDayType {
  date?: string;
  title: string;
  exercises: ExerciseType[];
}

export type WorkoutData = Record<string, WorkoutDayType>

export type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T;
