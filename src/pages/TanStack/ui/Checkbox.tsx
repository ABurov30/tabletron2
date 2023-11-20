import { useEffect, useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { observer } from 'mobx-react-lite';
import { green } from '@mui/material/colors';

const CheckboxMui = observer(({ getValue, row, column, table }: any) => {
  const initValue = getValue();
  const [value, setValue] = useState(initValue);

  const onBlur = () => {
    table.options.meta?.updateData(row.index, column.id, value);
  };

  useEffect(() => {
    setValue(initValue);
  }, [initValue]);
  return (
    <div>
      <Checkbox
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={onBlur}
        sx={{
          color: green[400],
          '&.Mui-checked': {
            color: green[400],
          },
        }}
      />
    </div>
  );
});

export default CheckboxMui;
