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


const Question9 = ({ansnine,handleChangeNine,checkAnsNine,showModal9}) => {
   const classes= useStyles()

   return ( 
      <div>
         {showModal9 && (
            <Modal2 />
         )}
         <div className="q-wrapper">
            <motion.div className="q-inner"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            >
               <h1>Question 9</h1>
               <p>Which of the following API creates a client?
               </p>
               <FormControl component="fieldset">
                  <RadioGroup ansnine={ansnine} onChange={handleChangeNine}>
                     <FormControlLabel 
                        value='A. net.createServer([options][, connectionListener])' control={<WhiteRadio /> } 
                        label='A. net.createServer([options][, connectionListener])' />
                     <FormControlLabel 
                        value='B. net.connect(options[, connectionListener])' control={<WhiteRadio />} 
                        label='B. net.connect(options[, connectionListener])' />
                     <FormControlLabel 
                        value='C. net.createConnection(port[, host][, connectListener])' control={<WhiteRadio />} 
                        label='C. net.createConnection(port[, host][, connectListener])' />
                     <FormControlLabel 
                        value='D. None of the Above' control={<WhiteRadio />} 
                        label='D. None of the Above' />
                  </RadioGroup>
                  {ansnine && (
                     <motion.div
                        variants={nextVariants}
                     >
                        <Button type="submit" variant="contained" color="secondary" className={classes.button} onClick={() => checkAnsNine(ansnine)}>
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
 
export default Question9;