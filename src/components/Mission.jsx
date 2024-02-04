import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" size='large' sx={{fontSize:20}} onClick={handleClickOpen}>
        Mission
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Mission of CFGA"}</DialogTitle>
        <DialogContent sx={{ padding: 4 }}>
          <DialogContentText id="alert-dialog-slide-description">
            The mission of the church is to nurture spiritual development, fostering a community of faith where individuals can worship, connect, and grow in their relationship with God. 
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}