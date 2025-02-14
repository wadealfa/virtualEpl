import styled from "styled-components";

const StyledDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: black;
  background: linear-gradient(90deg, #193da0, #231d77, #08194b);
  text-align: center;
  height: 180px;
  padding: 10px;
  border: solid #ff6600;
  border-radius: 10px;
  color: white;
`;

function Alert({ error, message }) {
  return (
    <StyledDiv>
      <h2 className="text-2xl font-semibold ">Error:{error}</h2>
      <p className="text-lg italic font-semibold">{message}</p>
    </StyledDiv>
  );
}

export default Alert;
