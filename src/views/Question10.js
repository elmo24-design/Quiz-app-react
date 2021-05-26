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


const Question10 = ({ansten,handleChangeTen,checkAnsTen,showModal10}) => {
   const classes= useStyles()

   return ( 
      <div>
         {showModal10 && (
            <Modal2 />
         )}
         <div className="q-wrapper q10">
            <motion.div className="q-inner"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            >
               <h1>Question 10</h1>
               <p>What is Express?
               </p>
               <FormControl component="fieldset">
                  <RadioGroup ansten={ansten} onChange={handleChangeTen}>
                     <FormControlLabel 
                        value='A. Express is a application framework that provides a robust set of features to develop desktop based applications.' control={<WhiteRadio /> } 
                        label='A. Express is a application framework that provides a robust set of features to develop desktop based applications.' />
                     <FormControlLabel 
                        value='B. Express is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications.' control={<WhiteRadio />} 
                        label='B. Express is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications.' />
                     <FormControlLabel 
                        value='C. Both of the above.' control={<WhiteRadio />} 
                        label='C. Both of the above.' />
                     <FormControlLabel 
                        value='D. None of the Above' control={<WhiteRadio />} 
                        label='D. None of the Above' />
                  </RadioGroup>
                  {ansten && (
                     <motion.div
                        variants={nextVariants}
                     >
                        <Button type="submit" variant="contained" color="secondary" className={classes.button} onClick={() => checkAnsTen(ansten)}>
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
 
export default Question10;