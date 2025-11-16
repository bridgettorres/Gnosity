import "./style/logout.css";
import "./style/signup.css";
import { useNavigate } from 'react-router-dom';

const LogoutButton = ({ onLogout }) => {
  const navigate = useNavigate(); 

  return (
    <div className="logout-container">
      <button
        className="logout-btn submit"
        onClick={() => {
          navigate('/');
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;