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


const Question4 = ({ansfour,handleChangeFour,checkAnsFour,showModal4}) => {
   const classes= useStyles()

   return ( 
      <div>
         {showModal4 && (
            <Modal2 />
         )}
         <div className="q-wrapper">
            <motion.div className="question-container q-inner"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            >
               <h1>Question 4</h1>
               <p>Which of the following statement is valid to use a Node module http in a Node based application?
               </p>
               <FormControl component="fieldset">
                  <RadioGroup ansfour={ansfour} onChange={handleChangeFour}>
                     <FormControlLabel value='A. var http = require("http");' control={<WhiteRadio /> } label='A. var http = require("http");' />
                     <FormControlLabel value='B. var http = import("http");' control={<WhiteRadio />} label='B. var http = import("http");' />
                     <FormControlLabel value='C. package http;' control={<WhiteRadio />} label='C. package http;' />
                     <FormControlLabel value='D. import http;' control={<WhiteRadio />} label='D. import http;' />
                  </RadioGroup>
                  {ansfour && (
                     <motion.div
                        variants={nextVariants}
                     >
                        <Button type="submit" variant="contained" color="secondary" className={classes.button} onClick={() => checkAnsFour(ansfour)}>
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
 
export default Question4;