export const getTodayDateString = (): string => {
  const todayDate = new Date();
  const year = todayDate.getFullYear();
  const month = todayDate.getMonth() + 1;
  const day = todayDate.getDate();

  return `${day}.${month}.${year}`;
}
