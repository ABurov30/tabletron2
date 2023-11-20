import { FC } from 'react';

import { columnsConfig } from './configs/columnsConfig';
import appointment from '../../store/appointment';
import defaultData from '../../mock/defaultData';

import NewBaseTable from './ui/NewBaseTable';
import { observer } from 'mobx-react-lite';
import { IApointment } from '../../mock/types';
import { Row } from '@tanstack/react-table';

const TanStackTable: FC = observer(() => {
  appointment.setData(defaultData);

  const { data } = appointment;
  return (
    <>
      <h1>TanStack</h1>
      <NewBaseTable
        dataFromStore={data as unknown as Row<IApointment>[]}
        setData={appointment.setData}
        columnsConfig={columnsConfig as any}
      />
    </>
  );
});

export default TanStackTable;
