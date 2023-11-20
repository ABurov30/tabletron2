import { Row } from '../types';

type Comparator = (a: Row, b: Row) => number;

export function getComparator(sortColumn: string): Comparator {
  switch (sortColumn) {
    case 'code':
    case 'vehicleNumber':
    case 'scheduledUntil':
    case 'scheduledFrom':
      return (a, b) => {
        return a[sortColumn].localeCompare(b[sortColumn]);
      };
    case 'warehouse':
    case 'yardLocation':
    case 'route':
      return (a, b) => {
        return a[sortColumn].code.localeCompare(b[sortColumn].code);
      };
    case 'current':
    case 'closed':
      return (a, b) => {
        return a[sortColumn] === b[sortColumn] ? 0 : a[sortColumn] ? 1 : -1;
      };
    case 'type':
    default:
      throw new Error(`unsupported sortColumn: "${sortColumn}"`);
  }
}
