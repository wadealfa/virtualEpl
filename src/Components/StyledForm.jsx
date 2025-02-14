import styled from "styled-components";

const StyledForm = styled.form`
  background: linear-gradient(90deg, #193da0, #231d77, #08194b);
  width: 100%;
  padding: 30px 20px;
  position: fixed;
  top: 90px;
  color: white;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  gap: 9px;
  justify-content: center;
  align-items: center;
  font-weight: 450;
  border: solid #ff6600;
  border-radius: 10px;
`;

const StyledButton = styled.button`
  background: linear-gradient(35deg, #0300a8, #3947c0, #09e2be);
  padding: 4px 25px;
  font-size: 24px;
  color: white;
  border-radius: 7px;
`;
const StyledLabel = styled.label`
  display: block;
  text-align: start;
  color: orange;
`;

export { StyledButton, StyledLabel, StyledForm };
