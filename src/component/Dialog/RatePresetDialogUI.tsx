import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Box,
} from '@mui/material';
import useDialog from '../../hooks/useDialog';
import PresetRateList from '../List/Rate/PresetRateList';

const RatePresetDialogUI = () => {
  const { open, handleOpen, handleClose } = useDialog(false);

  return (
    <Box>
      <Button
        variant="outlined"
        disableRipple
        onClick={handleOpen}
        size="small"
      >
        프리셋 설정
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="rate_preset_dialog_title"
        aria-describedby="rate_preset_dialog_description"
      >
        <DialogTitle id="rate_preset_dialog_title" fontSize={18}>
          프리셋 설정
        </DialogTitle>

        <DialogContent sx={{ pb: 0 }}>
          <DialogContentText
            id="alert-dialog-description"
            fontSize={12}
            height={30}
          >
            프리셋을 지정하여 매번 데이터를 입력하지 않고 가져옵니다.
          </DialogContentText>

          <PresetRateList />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>확인</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default RatePresetDialogUI;
