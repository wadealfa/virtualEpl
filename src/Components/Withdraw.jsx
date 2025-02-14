import  { StyledButton,StyledForm, StyledLabel } from "./StyledForm";
import StyledInput from "./StyledInput";
// "bg-gradient-to-tr from-[#0300a8] to-[#09e2be] text-[24px] text-white  p-2 px-10 rounded-lg"

function Withdraw() {
  return (
    <StyledForm>
      <h2 className="text-[30px] italic text-[#FF6600]  font-semibold">
        Request Withdraw{" "}
      </h2>
      <div className="border-2 w-full blur-sm"></div>
      <span className="text-[#95ff00]  ">minimum amount is Ksh 50</span>

      <div>
        <StyledLabel>Mobile Number</StyledLabel>
        <StyledInput type="number" />
      </div>
      <div>
        <StyledLabel>Amount</StyledLabel>
        <StyledInput type="number" />
      </div>

      <StyledButton>Withdraw</StyledButton>
    </StyledForm>
  );
}

export default Withdraw;
