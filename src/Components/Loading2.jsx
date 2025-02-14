import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LoadingSpinner2 = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 100); // Update progress every 100ms (10 seconds total)

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      {/* Football Image */}
      <motion.img
        src="./football.png" // Replace with your football image URL
        alt="Football"
        style={styles.football}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />

      {/* Border with Shrinking End */}
      <motion.div
        style={styles.border}
        animate={{
          rotate: 360,
          background: `conic-gradient(
            transparent ${progress}%,
            #00ff00 ${progress}%,
            #00ff00 100%
          )`,
        }}
        transition={{ duration: 10, ease: "linear" }}
      />
    </div>
  );
};

const styles = {
  container: {
    position: "relative",
    width: "200px",
    height: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  football: {
    width: "80px",
    height: "59px",
    position: "absolute",
    zIndex: 2,
  },
  border: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    
    // background: "conic-gradient(transparent 0%, #00ff00 0%, #00ff00 100%)",
    zIndex: 1,
  },
};

export default LoadingSpinner2;