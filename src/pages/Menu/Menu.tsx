import './Menu.css';
import { useNavigate } from 'react-router-dom';

export default function Menu() {
  const navigate = useNavigate();
  return (
    <div className="menu-container">
      <button className="button" onClick={() => navigate('/tanStack')}>
        <span className="actual-text">&nbsp;TanStack&nbsp;</span>
        <span aria-hidden="true" className="hover-text">
          &nbsp;TanStack&nbsp;
        </span>
      </button>
      <button className="button" onClick={() => navigate('/tabulator')}>
        <span className="actual-text">&nbsp;Tabulator&nbsp;</span>
        <span aria-hidden="true" className="hover-text">
          &nbsp;Tabulator&nbsp;
        </span>
      </button>
      <button className="button" onClick={() => navigate('/reactDataGrid')}>
        <span className="actual-text">&nbsp;React_Data_Grid&nbsp;</span>
        <span aria-hidden="true" className="hover-text">
          &nbsp;React_Data_Grid&nbsp;
        </span>
      </button>
      <button className="button" onClick={() => navigate('/results')}>
        <span className="actual-text">&nbsp;Results&nbsp;</span>
        <span aria-hidden="true" className="hover-text">
          &nbsp;Results&nbsp;
        </span>
      </button>
    </div>
  );
}
