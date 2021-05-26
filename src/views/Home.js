import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const containerVariants = {
   hidden: {
      opacity: 0
   },
   visible: {
      opacity:1,
      transition: {
         delay: 0.5,
         duration: 1.5
      }
   },
   exit: {
      x: '-100vw',
      transition: {
         ease: 'easeInOut'
      }
   }
}

const buttonVariants = {
   hover: {
      scale: [1,1.1,1,1,1.1,1,1,1.1,1],
      textShadow: "0px 0px 8px rgb(255,255,255)",
      boxShadow:  "0px 0px 8px rgb(255,255,255)",
   }
}


const Home = () => {
   return ( 
      <motion.div className="home"
         variants={containerVariants}
         initial="hidden"
         animate="visible"
         exit="exit"
      >
         <h1>Welcome to the Node JS Quiz</h1>
         <p>Ready to take the Quiz?</p>
         <Link to="/q1">
            <motion.button
               variants={buttonVariants}
               whileHover="hover"
            >
               Start
            </motion.button>
         </Link>
      </motion.div>
   );
}
 
export default Home;