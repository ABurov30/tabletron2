import { Row, Table } from '@tanstack/react-table';
import { IApointment } from '../../../mock/types';

export interface IHeaderArgs {
  table: Table<IApointment>;
}

export interface ICellArgs {
  row: Row<IApointment>;
}
