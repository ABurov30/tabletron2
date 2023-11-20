import 'react-tabulator/lib/styles.css';
import 'react-tabulator/lib/css/tabulator_site.css';
import { ColumnDefinition, ReactTabulator } from 'react-tabulator';
import appointment from '../../store/appointment';
import { obj } from '../../mock/defaultData';
import { toJS } from 'mobx';
import './Tabulator.css';
import { columns } from './configs/columnsConfig';
import { options } from './configs/options';
import { useRef } from 'react';
import { observer } from 'mobx-react-lite';

const Tabulator = observer(() => {
  const { data: dataFromStore } = appointment;
  const data = toJS(dataFromStore);
  let table = useRef();

  function addRow() {
    appointment.addAppointment(obj);
  }

  function removeRow() {
    //@ts-ignore
    appointment.removeAppointment(table?.current?.current.getSelectedData()[0]);
  }

  function updateRow() {
    //@ts-ignore
    appointment.updateAppointment(table?.current?.current.getSelectedData()[0]);
  }

  return (
    <>
      <h1>Tabulator</h1>
      <ReactTabulator
        onRef={(r) => (table.current = r)}
        data={data}
        options={options}
        columns={columns as ColumnDefinition[]}
        className="table"
      />
      <button onClick={() => updateRow()}>Save</button>
      <button onClick={() => removeRow()}>Delete</button>
      <button onClick={() => addRow()}>Add</button>
    </>
  );
});

export default Tabulator;
