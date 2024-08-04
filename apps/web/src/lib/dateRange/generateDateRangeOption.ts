import { DateRangeOption } from './dateRangeOptions';
import dayjs from 'dayjs';

export function generateDateRangeOption(option: DateRangeOption) {
  let startDate = dayjs();
  let endDate = dayjs();

  const currentDateTime = dayjs();

  switch (option) {
    case 'Today':
      startDate = currentDateTime.startOf('day');
      endDate = currentDateTime.endOf('day');
      break;
    case 'Yesterday':
      startDate = currentDateTime.subtract(1, 'day').startOf('day');
      endDate = currentDateTime.subtract(1, 'day').endOf('day');
      break;
    case 'The day before yesterday':
      startDate = currentDateTime.subtract(2, 'day').startOf('day');
      endDate = currentDateTime.subtract(2, 'day').endOf('day');
      break;
    case 'This week':
      startDate = currentDateTime.startOf('week');
      endDate = currentDateTime.endOf('week');
      break;
    case 'Previous week':
      startDate = currentDateTime.subtract(1, 'week').startOf('week');
      endDate = currentDateTime.subtract(1, 'week').endOf('week');
      break;
    case 'This month':
      startDate = currentDateTime.startOf('month');
      endDate = currentDateTime.endOf('month');
      break;
    case 'Previous month':
      startDate = currentDateTime.subtract(1, 'month').startOf('month');
      endDate = currentDateTime.subtract(1, 'month').endOf('month');
      break;
    case 'This year':
      startDate = currentDateTime.startOf('year');
      endDate = currentDateTime.endOf('year');
      break;
    case 'Previous year':
      startDate = currentDateTime.subtract(1, 'year').startOf('year');
      endDate = currentDateTime.subtract(1, 'year').endOf('year');
      break;
    default:
      // Handle default case if needed
      break;
  }

  // Format dates as per your requirement
  const startDate2 = startDate.format('YYYY-MM-DD HH:mm:ss');
  const endDate2 = endDate.format('YYYY-MM-DD HH:mm:ss');

  return { startDate: startDate2, endDate: endDate2 };
}
