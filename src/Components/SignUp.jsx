import { StyledButton, StyledForm, StyledLabel } from "./StyledForm";
import StyledInput from "./StyledInput";

function SignUp() {
  return (
    <>
      <StyledForm>
        <h1 className="text-3xl font-bold text-nowrap">
          Welcome to Virtual Epl
        </h1>
        <h2 className="text-xl text-center">
          Sign Up to Massive wins and instant payouts
        </h2>
        <StyledLabel>
          First name
          <StyledInput type="text" />
        </StyledLabel>
        <StyledLabel>
          Last name
          <StyledInput type="text" />
        </StyledLabel>{" "}
        <StyledLabel>
          Email
          <StyledInput
            type="email"
            placeholder="John@gmail.com"
          />
        </StyledLabel>{" "}
        <StyledLabel>
          Phone Number
          <StyledInput type="text" />
        </StyledLabel>
        <StyledButton>Join Now</StyledButton>
      </StyledForm>
    </>
  );
}

export default SignUp;
