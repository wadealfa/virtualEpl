import styled from "styled-components";

const StyledDepo = styled.div`
  width: 100%;
  padding:30px 20px;
  position: fixed;
  top: 0;
`;

function Deposit() {
  return (
    <StyledDepo className="bg-[rgba(0,0,0,0.8)]">
      <span className="text-[#95ff00] text-xl ">
        Minimum deposit amount is KES 10
      </span>
      <form
        action=""
        className="flex flex-col gap-2 text-center">
        <label className="text-start text-[29px]">Amount(ksh)</label>
        <input
          type="number"
          className=" text-white bg-[#292929] border-2 text-3xl  p-3"
        />
        <button className="rounded-xl font-semibold text-2xl w-32  p-3 bg-blue-500">
          Deposit
        </button>
      </form>

      <div>
        <span className="text-start text-[49px] text-white ">or</span>
        <div className="flex flex-col gap-2 text-orange-600 italic font-semibold text-[20px]">
          <span>1.Go to M-PESA on your phone</span>
          <span>2.Select Pay Bill option</span>
          <span>3.Enter Business no. 12345</span>
          <span>4.Enter Account no. 12345</span>
          <span>5.Enter the Amount</span>
          <span>6.Enter your M-PESA PIN and Send</span>
        </div>
      </div>
    </StyledDepo>
  );
}

export default Deposit;
