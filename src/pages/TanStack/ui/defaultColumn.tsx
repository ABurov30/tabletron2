import { useEffect, useState } from 'react';
import { IApointment } from '../../../mock/types';
import { Table } from '@tanstack/react-table';

interface ICellArgs {
  getValue: () => IApointment;
  row: {
    index: number;
  };
  column: {
    id: string;
  };
  table: Table<IApointment>;
}

const defaultColumn: any = {
  cell: ({ getValue, row: { index }, column: { id }, table }: ICellArgs) => {
    const initialValue = getValue();
    const [value, setValue] = useState(initialValue);

    const onBlur = () => {
      //@ts-ignore
      table.options.meta?.updateData(index, id, value);
    };

    useEffect(() => {
      setValue(initialValue);
    }, [initialValue]);

    return (
      <input
        value={value as any}
        onChange={(e) => setValue(e.target.value as any)}
        onBlur={onBlur}
      />
    );
  },
};

export default defaultColumn;
