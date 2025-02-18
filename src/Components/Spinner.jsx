import { motion } from "framer-motion";

const imgVariants = {
  spinBounce: {
    rotate: [0, 360], // Spins infinitely
    y: [0, -40, 0], // Moves up and down (bouncing effect)
    transition: {
      rotate: {
        duration: 2, // One full spin in 2 seconds
        repeat: Infinity, // Loops forever
        ease: "linear",
      },
      y: {
        duration: 1, // One bounce cycle in 1 second
        repeat: Infinity, // Loops forever
        ease: "easeInOut", // Smooth bounce effect
      },
    },
  },
};

function Spinner() {
  return (
    <div className="fixed top-40 left-10 ">
      <motion.img
        src="uefaball.png"
        alt="Spinning Ball"
        width={70}
        height={70}
        variants={imgVariants}
        animate="spinBounce" // Apply spinning and bouncing animation
      />
    </div>
  );
}

export default Spinner;
