import { motion } from 'framer-motion';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';

const containerVariants = {
   hidden: {
      opacity: 0,
      x: '100vw'
   },
   visible: {
      opacity: 1,
      x: 0,
      transition: {
         type: 'spring',
         mass: 0.4,
         damping: 8,
         when: "beforeChildren",
         staggerChildren: 0.3
      }
   },
   exit: {
      x: '-100vw',
      transition: {
         ease: 'easeInOut'
      }
   }
}
const childVariants = {
   hidden: {
      opacity: 0
   },
   visible: {
      opacity: 1
   }
}
const buttonVariants = {
   hover: {
      scale: [1,1.1,1,1,1.1,1,1,1.1,1],
      textShadow: "0px 0px 8px rgb(255,255,255)",
      boxShadow:  "0px 0px 8px rgb(255,255,255)",
   }
}


const Final = ({score,tryAgain}) => {
   return (
      <div>
         <motion.div
            className="final-wrapper"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
         >
            <div className="cards-container">
               {
                  score >= 5 ? 
                  <div className="top passed">
                     <h1>Congratulations! You passed!</h1>
                  </div>
                  :
                  <div className="top failed">
                     <h1>Sorry, You failed.</h1>
                     <SentimentDissatisfiedIcon id="sad"/> 
                  </div>
               }
               <div className="final-score">
                  <motion.h2 variants={childVariants}>Final Score:</motion.h2>
                  <motion.div className="round-container" variants={childVariants}>
                     <div className="round">
                        {`${score}/10`}
                     </div>
                  </motion.div>
               </div>
               <motion.div className="button-try" variants={childVariants}>
                  <motion.button 
                  variants={buttonVariants}
                  whileHover="hover"
                  onClick={tryAgain}
                  >
                     Try Again?
                  </motion.button>
               </motion.div>
            </div>
         </motion.div>
      </div> 
   );
}
 
export default Final;