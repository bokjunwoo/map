import { Divider, Chip } from '@mui/material';

const DividerChipUI = ({ label }: { label: string }) => {
  return (
    <Divider>
      <Chip label={label} size="small" sx={{ mt: 1, mb: 1 }} />
    </Divider>
  );
};

export default DividerChipUI;
