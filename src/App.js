import {
  Button,
  Card,
  FlexLayout,
  FormChild,
  FormElement,
  TextField,
  TextStyles,
} from "@cedcommerce/ounce-ui";
import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="App">
      <section>
        <FlexLayout
          desktopWidth="100"
          mobileWidth="100"
          spacing="loose"
          tabWidth="50"
        >
           <TextStyles
    alignment="left"
    fontweight="normal"
    textcolor="dark"
    type="Heading"
    utility="none"
  >
  Login
  </TextStyles>
          <Card>
            <FormElement >
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
                    alert("Submitting.....");
                    setPassword("");
                    setUsername("");
                  }}
                >
                  Login
                </Button>
              </FormChild>
            </FormElement>
          </Card>
        </FlexLayout>
      </section>
    </div>
  );
}

export default App;
