import { Link } from "react-router-dom";
import "./../css/login.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
export default function Login() {
  return (
    <div className="login d-flex justify-content-center align-items-center">
      <div className="login-box">
        <div className="heading mb-4">
          <h3 className="text-white ">Zaloguj się do systemu</h3>
        </div>

        <div className="form">
          <div className="input-box mb-4" style={{ width: "calc(100% - 2px)" }}>
            <input
              type="text"
              className="enter-input"
              required
              autoComplete="off"
              name="email"
            />
            <label className="label-enter-input">Email</label>
          </div>

          <div className="input-box" style={{ width: "calc(100% - 2px)" }}>
            <input
              type="password"
              className="enter-input"
              required
              autoComplete="off"
              name="password"
            />
            <label className="label-enter-input">Hasło</label>
          </div>

          <div
            className="mt-3 mb-3 d-flex justify-content-center"
            key={"default-checkbox"}
            style={{ width: "100%" }}
          >
            <Form.Check id="remember" type="checkbox" label="Zapamiętaj mnie" />
          </div>

          <div className="mb-3 text-center" style={{ width: "100%" }}>
            <Link to={"/dashboard"}>
              <Button style={{ backgroundColor: "#0fa4ff", border: "0" }}>
                Zaloguj
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
