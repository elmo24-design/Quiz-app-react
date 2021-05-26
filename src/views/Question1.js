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
   },
}));


const Question1 = ({ansone, handleChangeOne,checkAnsOne,showModal1}) => {
   const classes= useStyles()

   return (
      <>
         {showModal1 && (
            <Modal2 />
         )}
         <div className="q-wrapper">
            <motion.div
               variants={containerVariants}
               initial="hidden"
               animate="visible"
               exit="exit"
            >
               <div className="q-inner">
                  <h1>Question 1</h1>
                  <p>It is a Server side scripting which is used to build scalable programs. Its multiple advantages over other server side languages, the prominent being non-blocking I/O.
                  </p>
                  <FormControl component="fieldset">
                     <RadioGroup ansone={ansone} onChange={handleChangeOne}>
                        <FormControlLabel value="A. Node JS" control={<WhiteRadio /> } label="A. Node JS" />
                        <FormControlLabel value="B. PHP" control={<WhiteRadio />} label="B. PHP" />
                        <FormControlLabel value="C. Python" control={<WhiteRadio />} label="C. Python" />
                        <FormControlLabel value="D. C++" control={<WhiteRadio />} label="D. C++" />
                     </RadioGroup>
                     { ansone && (
                        <motion.div
                           variants={nextVariants}
                        >
                           <Button type="submit" variant="contained" color="secondary" className={classes.button} onClick={() => checkAnsOne(ansone)}
                           >
                              SUBMIT
                           </Button>
                        </motion.div>
                     )}
                     
                  </FormControl>
                  
               </div>
            </motion.div>
         </div>
      </> 
   );
}
 
export default Question1;