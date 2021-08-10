import { React } from 'react';
import { Grid, TextField, makeStyles, Button, Modal } from '@material-ui/core'


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
