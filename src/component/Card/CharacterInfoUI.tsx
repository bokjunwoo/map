import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
} from '@mui/material';
import { useRecoilValue } from 'recoil';
import { characterInfoState } from '../../atoms/characterInfoState';

const CharacterInfoUI = () => {
  const characterInfo = useRecoilValue(characterInfoState);

  return (
    <List
      sx={{
        width: '100%',
        backgroundImage: 'url(/images/landing.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        p: 0,
        borderRadius: 1,
      }}
    >
      <ListItem sx={{ bgcolor: 'rgba(0, 0, 0, 0.7)', p: 4, borderRadius: 1 }}>
        <ListItemAvatar sx={{ opacity: 1 }}>
          <Avatar
            sx={{ width: 120, height: 120, opacity: 1 }}
            alt="캐릭터 이미지"
            src={characterInfo.character_image}
          />
        </ListItemAvatar>
        <ListItemText
          primary={characterInfo.character_name}
          secondary={
            <>
              <Typography
                fontSize={14}
                color="#FFFFFF"
                component="span"
                sx={{ display: 'block' }}
              >
                {characterInfo.world_name} | {characterInfo.character_class}
              </Typography>
              <Typography component="span" fontWeight={600} color="#FFFFFF">
                Lv. {characterInfo.character_level}{' '}
              </Typography>
              <Typography component="span" fontSize={12} color="#FFFFFF">
                ({characterInfo.character_exp_rate}%)
              </Typography>
            </>
          }
          primaryTypographyProps={{
            fontSize: 22,
            fontWeight: 'bold',
            color: '#FFFFFF',
          }}
        />
      </ListItem>
    </List>
  );
};

export default CharacterInfoUI;
