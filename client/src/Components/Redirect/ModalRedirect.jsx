import { React } from 'react';
import { Grid, TextField, Button, Modal } from '@mui/material';


import makeStyles from '@mui/styles/makeStyles';


const useStyle = makeStyles(theme => ({
 root: {

 },
}));

export default function ModalRedirect() {

  const classes = useStyle();

  return (
    <div>
      <Button color="primary" variant="outlined" onClick={''}> modal </Button>
      <Modal>


      </Modal>
    </div>
  )
}
