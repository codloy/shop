import dayjs from 'dayjs';

export function generateDateRangeString() {
  const currentDateString = dayjs().toISOString();

  const startDate = dayjs(currentDateString)
    .startOf('day')
    .format('YYYY-MM-DDTHH:mm');

  const endDate = dayjs(currentDateString)
    .endOf('day')
    .format('YYYY-MM-DDTHH:mm');

  return { startDate, endDate };
}
