import {Link, useLocation} from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CancelIcon from '@material-ui/icons/Cancel';

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

const Modal = ({ showModal,headingDesc,subHeadDesc,backColor,correctIcon,wrongIcon,exp5}) => {
  const location = useLocation()

  return (
      <AnimatePresence exitBeforeEnter>
         {showModal && (
            <motion.div className="backdrop modal-original"
               variants={backdrop}
               initial="hidden"
               animate="visible"
               exit="hidden"
            >
               <motion.div className={`modal ${backColor}`}
                  variants={modal}
               >
                  <div className="heading">
                     {correctIcon &&  (
                        <CheckCircleOutlineIcon id="modal-svg"/>
                     )}
                     {wrongIcon &&  (
                        <CancelIcon id="modal-svg" />
                     )}
                     <h1>{headingDesc}</h1>
                  </div>
                  <p>{subHeadDesc}</p>
                  <Link to={
                     location.pathname === '/q1' ? '/q2' :
                     location.pathname === '/q2' ? '/q3' : 
                     location.pathname === '/q3' ? '/q4' : 
                     location.pathname === '/q4' ? '/q5' : 
                     location.pathname === '/q5' ? '/q6' : 
                     location.pathname === '/q6' ? '/q7' : 
                     location.pathname === '/q7' ? '/q8' : 
                     location.pathname === '/q8' ? '/q9' : 
                     location.pathname === '/q9' ? '/q10' : 
                     location.pathname === '/q10' ? '/final' : ''
                  }>
                    <button>Next</button> 
                  </Link>
               </motion.div>
            </motion.div>
         )}
      </AnimatePresence> 
   );
}
 
export default Modal;