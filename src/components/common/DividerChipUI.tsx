import { Divider, Chip } from '@mui/material';

const DividerChipUI = ({ label }: { label: string }) => {
  return (
    <Divider variant="middle">
      <Chip label={label} size="small" />
    </Divider>
  );
};

export default DividerChipUI;
