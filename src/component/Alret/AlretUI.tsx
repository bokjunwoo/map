import CloseIcon from '@mui/icons-material/Close';
import { Collapse, Alert, IconButton } from '@mui/material';
import { useRecoilState } from 'recoil';
import { alertState } from '../../atoms/alertState';

const AlertUI = () => {
  const [alert, setAlert] = useRecoilState(alertState);

  const handleClose = () => {
    setAlert({
      ...alert,
      isError: false,
      message: '',
    });
  };

  return (
    <Collapse in={alert.isError} sx={{ position: 'absolute' }}>
      <Alert
        severity="error"
        action={
          <IconButton aria-label="close" size="small" onClick={handleClose}>
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ mb: 2 }}
      >
        {alert.message}
      </Alert>
    </Collapse>
  );
};

export default AlertUI;
