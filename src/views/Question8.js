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


const Question8 = ({anseight,handleChangeEight,checkAnsEight,showModal8}) => {
   const classes= useStyles()

   return ( 
      <div>
         {showModal8 && (
            <Modal2 />
         )}
         <div className="q-wrapper">
            <motion.div className="q-inner"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            >
               <h1>Question 8</h1>
               <p>Which of the following is true about package.json?
               </p>
               <FormControl component="fieldset">
                  <RadioGroup anseight={anseight} onChange={handleChangeEight}>
                     <FormControlLabel 
                        value='A. package.json is present in the root directory of any Node application/module.' control={<WhiteRadio /> } 
                        label='A. package.json is present in the root directory of any Node application/module.' />
                     <FormControlLabel 
                        value='B. package.json is used to define the properties of a package.' control={<WhiteRadio />} 
                        label='B. package.json is used to define the properties of a package.' />
                     <FormControlLabel 
                        value='C. package.json can be used to update dependencies of a Node application.' control={<WhiteRadio />} 
                        label='C. package.json can be used to update dependencies of a Node application.' />
                     <FormControlLabel 
                        value='D. All of the Above' control={<WhiteRadio />} 
                        label='D. All of the Above' />
                  </RadioGroup>
                  {anseight && (
                     <motion.div
                        variants={nextVariants}
                     >
                        <Button type="submit" variant="contained" color="secondary" className={classes.button} onClick={() => checkAnsEight(anseight)}>
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
 
export default Question8;