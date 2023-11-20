import 'react-tabulator/lib/styles.css';
import 'react-tabulator/lib/css/tabulator_site.css';
import { ColumnDefinition, ReactTabulator } from 'react-tabulator';
import { options } from './configs/options';
import { data } from './data/data';
import { columns } from './configs/columnsConfig';

export default function Results() {
  return (
    <>
      <h1>Results</h1>
      <ReactTabulator
        data={data}
        options={options}
        columns={columns as ColumnDefinition[]}
        className="table"
      />
    </>
  );
}
