import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <div className="footer-container">
        <h1>Footer</h1>
        <div style={{ margin: "1rem", color: "#ffff", textAlign: "center" }}>
          <h3>This site is made by: {user.name}</h3>
          <h3>{user.email}</h3>
        </div>
      </div>
    </>
  );
};

export default Footer;
