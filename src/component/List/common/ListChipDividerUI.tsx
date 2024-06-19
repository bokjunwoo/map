import { Chip, Divider } from '@mui/material';

type ListChipDividerUIProps = {
  label: string;
};

const ListChipDividerUI = ({ label }: ListChipDividerUIProps) => {
  return (
    <Divider variant="middle" component="li">
      <Chip label={label} size="small" sx={{ fontSize: 12 }} />
    </Divider>
  );
};

export default ListChipDividerUI;
