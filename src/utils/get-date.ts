const addingZero = (num: number): string => `${num >= 10 ? '' : '0'}${num}`

export const getTodayDateString = (): string => {
  const todayDate = new Date();
  const year = todayDate.getFullYear();
  const month = todayDate.getMonth() + 1;
  const day = todayDate.getDate();

  return `${addingZero(day)}.${addingZero(month)}.${year}`;
}
