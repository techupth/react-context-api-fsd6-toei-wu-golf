import { userContext } from "../App.jsx";
import { useContext } from "react";

function AppHeader() {
  const { username } = useContext(userContext);

  return (
    <div className="app-header-container">
      <h1 className="app-title">Products</h1>
      <h2>สวัสดีคุณ {username}</h2>
    </div>
  );
}

export default AppHeader;
