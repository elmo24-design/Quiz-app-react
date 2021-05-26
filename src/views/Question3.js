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


const Question3 = ({ansthree,handleChangeThree,checkAnsThree,showModal3}) => {
   const classes= useStyles()

   return ( 
      <div>
         {showModal3 && (
            <Modal2 />
         )}
         <div class="q-wrapper">
            <motion.div className="question-container q-inner"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            >
               <h1>Question 3</h1>
               <p>What REST stands for?
               </p>
               <FormControl component="fieldset">
                  <RadioGroup ansthree={ansthree} onChange={handleChangeThree}>
                     <FormControlLabel value="A. Representational State Transfer" control={<WhiteRadio /> } label="A. Representational State Transfer" />
                     <FormControlLabel value="B. Resource Efficient State Transfer" control={<WhiteRadio />} label="B. Resource Efficient State Transfer" />
                     <FormControlLabel value="C. Real Elegant State Transfer" control={<WhiteRadio />} label="C. Real Elegant State Transfer" />
                     <FormControlLabel value="D. Resource Elegant State Transfer" control={<WhiteRadio />} label="D. Resource Elegant State Transfer" />
                  </RadioGroup>
                  {ansthree && (
                     <motion.div
                        variants={nextVariants}
                     >
                        <Button type="submit" variant="contained" color="secondary" className={classes.button} onClick={() => checkAnsThree(ansthree)}>
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
 
export default Question3;