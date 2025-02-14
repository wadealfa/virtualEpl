import styled from "styled-components";

const SignUpForm = styled.form`
  font-size: medium;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 20px;
  border-radius: 50px;
  max-width: 500px;
  background-color: rgba(189, 189, 189, 0.589);

  /* Styling the label */
  label {
    display: block;
    font-weight: bold;
    color: #ffbb00;
  }

  /* Styling the input */
  input {
    padding: 10px;

    border-radius: 5px;
    width: 100%;
    color: black;
    font-size: 18px;
    background-color: #ffffff;
  }

  /* Add hover or focus states if needed */

  input:focus {
    border: 3px solid #008b51;
    transition: ease-in 0.4s;
    outline: none;
    background-color: #727272;
  }
`;

function Form() {
  return (
    <SignUpForm>
      <div>
        <label>First name</label>
        <input
          type="text"
          placeholder="enter your name"
        />
      </div>
      <div>
        <label>Second name</label>
        <input
          type="text"
          placeholder="enter second name"
        />
      </div>

      <div>
        <label> Phone Number</label>
        <input
          type="Number"
          placeholder="e.g 07123456789"
        />
      </div>
      <div>
        <label>Email Address</label>

        <input
          type="text"
          placeholder="me@gmail.com"
        />
      </div>
    </SignUpForm>
  );
}

export default Form;
