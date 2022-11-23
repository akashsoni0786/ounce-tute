import {
  Alert,
  Button,
  Card,
  FlexLayout,
  FormChild,
  FormElement,
  TextField,
  TextStyles,
} from "@cedcommerce/ounce-ui";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false);
  const [alertText, setAlertText] = useState("");
  const [alertType, setAlertType] = useState("danger");
  const submitData = () => {
    if (username === "" || password === "") {
      setAlertText("All fields are mendatory!");
      setAlertType("danger");
      setAlert(true)
    } else if (username === "admin" && password === "password123") {
      setPassword("");
      setUsername("");
      setAlert(true);
      setAlertType("success");
      setAlertText("Welcome Admin");
      setTimeout(()=>{navigate("/dashboard")},1000);
    } else {
      setAlertText("Invalid credentials [username= admin & password= password123]");
      setAlert(true);
      setAlertType("danger");
    }
  };
  return (
    <>
      <section>
        <TextStyles
          alignment="left"
          fontweight="normal"
          textcolor="dark"
          type="Heading"
          utility="none"
        >
          Login
        </TextStyles>
        {
        alert && <Alert onClose={()=>{setAlert(false)}}  type={alertType} open={false}>
        {alertText}
      </Alert>
      }
        <FlexLayout
          desktopWidth="100"
          mobileWidth="100"
          spacing="loose"
          tabWidth="50"
        >
          <Card>
            <FormElement>
              <FormChild>
                <TextField
                  clearFunction={function noRefCheck() {}}
                  helpIcon=""
                  id=""
                  innerPreIcon={
                    <img
                      alt=""
                      src="https://img.freepik.com/free-icon/user_318-408961.jpg?w=2000"
                    />
                  }
                  max="200"
                  maxlength="20"
                  min="20"
                  name="Username"
                  onChange={function noRefCheck(e) {
                    setUsername(e);
                  }}
                  placeHolder="Enter username"
                  showHelp="THis text is only for authentication"
                  value={username}
                />
                <TextField
                  clearFunction={function noRefCheck() {}}
                  helpIcon=""
                  id=""
                  innerPreIcon={
                    <img
                      alt=""
                      src="https://e7.pngegg.com/pngimages/669/574/png-clipart-computer-icons-password-others-miscellaneous-random-password-generator.png"
                    />
                  }
                  max="200"
                  maxlength="20"
                  min="20"
                  name="Password"
                  onBackspace={function noRefCheck() {}}
                  onChange={function noRefCheck(e) {
                    setPassword(e);
                  }}
                  placeHolder="Enter password"
                  prefix=""
                  showHelp="THis text is only for authentication"
                  type="password"
                  value={password}
                />
                <Button
                  onClick={() => {
                    submitData();
                  }}
                >
                  Login
                </Button>
              </FormChild>
            </FormElement>
          </Card>
        </FlexLayout>
      </section>
     
      
    </>
  );
}

export default Login;
