import { StyledButton, StyledForm, StyledLabel } from "./StyledForm";
import StyledInput from "./StyledInput";

function Login() {
  return (
    <div>
      <StyledForm>
        <h1>Login to Virtual Epl</h1>
        <StyledLabel>
          Enter Phone Number
          <StyledInput type="number" />
        </StyledLabel>
        <StyledButton>
          Login
        </StyledButton>
      </StyledForm>
    </div>
  );
}

export default Login;
