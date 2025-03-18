import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin</h2>
      <ul>
        <li>
          <Link to="/">🏠 대시보드</Link>
        </li>
        <li>
          <Link to="/users">👥 사용자 관리</Link>
        </li>
        <li>
          <Link to="/settings">⚙ 설정</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
