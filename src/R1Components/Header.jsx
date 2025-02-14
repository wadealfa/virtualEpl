import { Link } from "react-router-dom";
import Button from "./Button";

function Header() {
  return (
    <div className="bg-slate-900 flex justify-between p-4 items-center">
      <div className="flex w-max border-2 rounded-md p-2 flex-col text-center">
        <h2 className="text-xl font-bold">Virtual Epl</h2>
        <h3>win big in seconds</h3>
      </div>

      <div className="flex ">
        <Link to="/">Trio-Uno-Match</Link>
        <Link to="/">Trio-dos-Match</Link>
        <Link to="/ho">Trio-tres-Match</Link>
      </div>

      <div className="flex gap-5">
        <button className="border-2 p-2 rounded-full">Register</button>
        <Button>Login</Button>
      </div>
    </div>
  );
}

export default Header;
