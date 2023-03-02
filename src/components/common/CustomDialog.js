import * as React from 'react';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';  // Sad Icon
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';  // Neutral Icon
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';  // Happy Icon

import '../../styles/common/CustomDialog.scss';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CustomDialog() {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        className="dialog"
    >
        <DialogTitle>{"Help us know your mood better"}</DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Box className="moodIcons">
              <SentimentVeryDissatisfiedIcon className='sad' />
              <SentimentNeutralIcon className='neutral' />
              <SentimentSatisfiedAltIcon className='happy' />
            </Box>

            <FormControl>
              <FormLabel id="demo-row-radio" sx={{marginTop: "20px"}}>Are you feeling any sense of accomplishment or satisfaction right now?</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio"
                name="row-radio"
              >
                <FormControlLabel value="femal" control={<Radio />} label="Yes,ery much" />
                <FormControlLabel value="mal" control={<Radio />} label="A littlet" />
                <FormControlLabel value="oter" control={<Radio />} label="Nott all" />
              </RadioGroup>

              <FormLabel id="demo-row-radio-buttons-group-label" sx={{marginTop: "20px"}}>Are you feeling any sense of accomplishment or satisfaction right now?</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="female" control={<Radio />} label="Yes, very much" />
                <FormControlLabel value="male" control={<Radio />} label="A little bit" />
                <FormControlLabel value="other" control={<Radio />} label="Not at all" />
              </RadioGroup>
            </FormControl>
          </DialogContentText>
        </DialogContent>

        <DialogActions>
            <Typography variant="body" sx={{ flexGrow: 1, color: "#000", margin: "10px" }}>
              Thanks for answering, enjoy the break with some relaxing activities.
            </Typography>
            <Button variant="contained" onClick={handleClose} disabled>Okay</Button>
        </DialogActions>
    </Dialog>
  );
}
