import { useContext } from "react";
import weatherContext from "../context/WeatherContext";
function Header() {
  const data = useContext(weatherContext);
  console.log(data);
  return <div>Header</div>;
}

export default Header;
