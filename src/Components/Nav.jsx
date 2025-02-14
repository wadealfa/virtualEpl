import { FaUser, FaWallet } from "react-icons/fa";
import { FaCoins } from "react-icons/fa6";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { motion, spring } from "framer-motion";

const StyledNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  font-size: 20px;

  background: rgba(255, 255, 255, 0.11); /* Light transparent background */
  backdrop-filter: blur(15px); /* Glass effect */
  -webkit-backdrop-filter: blur(15px); /* Safari support */

  border-bottom-right-radius: 10px; /* Smooth rounded corners */

  border-bottom-left-radius: 10px; /* Smooth rounded corners */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.582); /* Soft shadow for depth */
  border: 1px solid rgba(255, 255, 255, 0.192); /* Slight border for contrast */
`;

const StyledUser = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const StyledProfile = styled.div`
  border: 2px solid;
  border-radius: 100%;
  width: 40px;
  aspect-ratio: 1;
  padding-left: 7.5px;
  padding-top: 5px;
`;
const titleVariants = {
  initial: {
    y: "-100vh",
    scale: 0,
  },
  final: {
    y: 0,
    scale: 1.2,
    transition: {
      type: spring,
      stiffness: 100,
    },
  },
};

const imgVariants = {
  initial: {
    y: "100vh",
  },
  final: {
    y: 0,
    transition:{
      type:spring,
      stiffness:90,
      
    }
  },
};
const spinAnimation = {
  // scale:[1.5 ,-1],

  rotate: [0, 360], // Rotates from 0 to 360 degrees
  transition: {
    repeat: Infinity, // Spins forever
    duration: 2, // Takes 2 seconds for a full rotation
    ease: "linear", // Smooth and continuous spinning
  },
};

function Nav() {
  const balance = useSelector(state=>state.game.balance);
  return (
    <StyledNav>
      <div className="grid grid-cols-2 gap-5">
        <motion.div
          variants={titleVariants}
          initial="initial"
          animate="final"
          className="text-2xl font-bold text-[#ff6600]">
          Virtual EPL
        </motion.div>

        <motion.img
          variants={imgVariants}
          initial="initial"
          animate="final"
         // Ball spins on hover
          whileInView={spinAnimation} // Ball spins when visible
          className=""
          src="football.png"
          alt=""
          width={40}
          height={40}
        />
      </div>
      <StyledUser>
        <motion.span
        whileHover={{
          scale:1.3
        }}
        >
          <FaCoins
            size={30}
            color="gold"
          />
        </motion.span>{" "}
        <span>: {balance}</span>
        {/* <button>
          <FaWallet
            size={30}
            color="goldenrod"
          />{" "}
        </button> */}
        <StyledProfile>
          <FaUser size={20} />
        </StyledProfile>
      </StyledUser>
    </StyledNav>
  );
}

export default Nav;
