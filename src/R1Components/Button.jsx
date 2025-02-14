import styled from "styled-components";

const Button = styled.button`
  background: green;
  padding: 10px 20px;
  font-size: large;
  border-radius: 20px;
  border: 2px solid white;

  transition: all 1s ease;

  &:hover {
    background: linear-gradient(90deg, #0a6e06, #bdc2c1);
    color: white;
    border: 2px solid grey;
  }
`;
export default Button;
