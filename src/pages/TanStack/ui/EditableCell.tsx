import { Input } from '@mui/material';
import { observer } from 'mobx-react-lite';

import { useEffect, useState } from 'react';

interface EditableCellProps {
  getValue: () => string;
  table: any;
  column: any;
  row: any;
}

export const EditableCell = observer(
  ({ getValue, row, column, table }: EditableCellProps) => {
    const initValue = getValue();
    const [value, setValue] = useState(initValue);

    const onBlur = () => {
      table.options.meta?.updateData(row.index, column.id, value);
    };

    useEffect(() => {
      setValue(initValue);
    }, [initValue]);

    return row.getIsSelected() ? (
      <Input
        style={{ width: '100%', color: 'white' }}
        value={value}
        className="editableCell"
        onChange={(e) => setValue(e.target.value)}
        onBlur={onBlur}
      />
    ) : (
      <p>{getValue()}</p>
    );
  }
);

export default EditableCell;
