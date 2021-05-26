import { withStyles } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal2 from '../components/Modal2';
import { motion } from 'framer-motion';

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
         delay: 0.1
      }
   },
   exit: {
      x: '-100vw',
      transition: {
         ease: 'easeInOut'
      }
   }
}
const nextVariants={
   hidden: {
      x: '-100vw'
   },
   visible:{
      x: 0,
      transition:{
         type: 'spring',
         stiffness: 80
      }
   }
}

const WhiteRadio = withStyles({
   root: {
      color: pink[50],
      '&$checked': {
         color: pink[500],
      },
   },
   checked: {},
})((props) => <Radio color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
   button: {
     margin: theme.spacing(1, 1, 0, 0),
     width: '6rem'
   },
}));


const Question2 = ({anstwo,handleChangeTwo,checkAnsTwo,showModal2}) => {
   const classes= useStyles()

   return ( 
      <div>
         {showModal2 && (
            <Modal2 />
         )}
         <div className="q-wrapper">
            <motion.div className="q-inner"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            >
               <h1>Question 2</h1>
               <p>It is a programming paradigm in which the flow of the program is determined by events like messages from other programs or threads. 
               </p>
               <FormControl component="fieldset">
                  <RadioGroup anstwo={anstwo} onChange={handleChangeTwo}>
                     <FormControlLabel value="A. Procedural Programming" control={<WhiteRadio /> } label="A. Procedural Programming" />
                     <FormControlLabel value="B. Object Oriented Programming" control={<WhiteRadio />} label="B. Object Oriented Programming" />
                     <FormControlLabel value="C. Event-Driven Programming" control={<WhiteRadio />} label="C. Event-Driven Programming" />
                     <FormControlLabel value="D. Functional Programming" control={<WhiteRadio />} label="D. Functional Programming" />
                  </RadioGroup>
                  { anstwo && (
                     <motion.div
                        variants={nextVariants}
                     >
                        <Button type="submit" variant="contained" color="secondary" className={classes.button} onClick={() => checkAnsTwo(anstwo)}>
                           SUBMIT
                        </Button>
                     </motion.div>
                  )}
               </FormControl>
            </motion.div>
         </div>
      </div>
   );
}
 
export default Question2;