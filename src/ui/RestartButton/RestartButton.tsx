import './RestartButton.css';
import { useNavigate } from 'react-router-dom';

export function RestartButton() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate('/');
        window.location.reload();
      }}
    >
      <input type="checkbox" id="checkbox"></input>
      <label htmlFor="checkbox" className="switch">
        <div className="powersign"></div>
      </label>
    </div>
  );
}
