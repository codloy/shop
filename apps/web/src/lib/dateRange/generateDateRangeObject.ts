export function generateDateRangeObject() {
  const currentDate: Date = new Date();

  const startDate: Date = new Date(currentDate);
  startDate.setHours(0, 0, 0, 0);

  const endDate: Date = new Date(currentDate);
  endDate.setHours(23, 59, 59, 999);

  return { startDate, endDate };
}
