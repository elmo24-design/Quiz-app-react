import { motion, AnimatePresence } from 'framer-motion'

const backdrop = {
   hidden: {
      opacity: 0,
   },
   visible: {
      opacity: 1
   }
}
const modal = {
   hidden: {
      y: "-100vh",
      opacity:0
   },
   visible: {
      y: '150px',
      opacity: 1,
      transition: {
         delay: 0.5
      }
   }
}

const Modal2 = () => {
  return (
      <AnimatePresence exitBeforeEnter>
         <motion.div className="backdrop modal2"
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit= "hidden"
         >
            <motion.div className="modal wrong"
               variants={modal}
            >
               <h1>You cannot Answer this Question again. :P</h1>
            </motion.div>
         </motion.div>
      </AnimatePresence> 
   );
}
 
export default Modal2;