import { Search, ShortText } from '@mui/icons-material';
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  IconButton,
  List,
  ListItemButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import fire from '../assets/fire.svg';
import telegram from '../assets/telegram.svg';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import youTube from '../assets/you-tube.svg';
import live from '../assets/live.svg';
import '../index.css';

export const cities = ['Київ', 'Одеса', 'Харків'];

const NavBar = () => {
  const [menu, setMenu] = useState('');
  const [town, setTown] = useState('');
  const [media, setMedia] = useState('');
  const [topicState, setTopicState] = useState('');
  const [lang, setLang] = useState('RU');

  return (
    <Stack sx={{ p: '0 4%' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          overflowX: 'auto',
          height: 85,
        }}
      >
        <List
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: { sm: '40%', md: '30%' },
          }}
        >
          <ListItemButton
            onClick={() => setMenu('#F6F6F6')}
            onBlur={() => setMenu('')}
            sx={{ bgcolor: menu, ml: { sm: -3, md: 0 } }}
          >
            <ShortText />
            <Typography sx={{ ml: 1, fontSize: 16, fontFamily: 'TT Severs' }}>Меню</Typography>
          </ListItemButton>
          {cities.map((city) => (
            <ListItemButton
              key={city}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                bgcolor: town === city ? '#F6F6F6' : '',
              }}
              onClick={() => setTown(city)}
              onBlur={() => setTown('')}
            >
              <Typography sx={{ fontSize: 14 }}>{city}</Typography>
            </ListItemButton>
          ))}
        </List>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: { sm: '60%', md: '45%' },
          }}
        >
          <TextField
            label={
              <Box sx={{ display: 'flex', alignItems: 'center', opacity: 0.7 }}>
                <Search /> <Box sx={{ ml: 1, mt: -0.5 }}>пошук новин</Box>
              </Box>
            }
            size='small'
            sx={{
              width: 300,
              bgcolor: '#F6F6F6',
              borderRadius: 5,
              '& fieldset': { border: 'none' },
            }}
          />
          {[telegram, facebook, instagram, youTube].map((socialMedia, i) => (
            <IconButton
              key={i}
              size='small'
              onClick={() => setMedia(i)}
              onBlur={() => setMedia('')}
              sx={{ bgcolor: media === i ? '#F0F0F0' : '' }}
            >
              <img src={socialMedia} />
            </IconButton>
          ))}
          <Box sx={{ color: '#8A8A8A' }}>|</Box>
          <IconButton
            sx={{ opacity: lang === 'RU' ? 1 : 0.5 }}
            onClick={() => setLang('RU')}
          >
            <Typography>RU</Typography>
          </IconButton>
          <IconButton
            sx={{ opacity: lang === 'UA' ? 1 : 0.5 }}
            onClick={() => setLang('UA')}
          >
            <Typography>UA</Typography>
          </IconButton>
        </Box>
      </Box>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          height: 48,
          overflowX: 'auto',
        }}
      >
        <ButtonGroup>
          {[
            { text: 'Війна', icon: fire },
            { text: 'Новини' },
            { text: 'Політика' },
            { text: 'Економіка' },
            { text: 'Суспільство' },
            { text: 'Погляди' },
            { text: 'Світ' },
          ].map((topic) => (
            <Button
              key={topic.text}
              variant='text'
              startIcon={topic.icon && <img src={topic.icon} />}
              sx={{
                color: topic.text === topicState ? '#FF7534' : 'black',
              }}
              onClick={() => setTopicState(topic.text)}
              onBlur={() => setTopicState('')}
            >
              {topic.text}
            </Button>
          ))}
        </ButtonGroup>
        <Button
          startIcon={<img src={live} />}
          sx={{ color: topicState === 'Live' ? '#FF7534' : 'black' }}
          onClick={() => setTopicState('Live')}
          onBlur={() => setTopicState('')}
        >
          Live
        </Button>
      </Box>
    </Stack>
  );
};

export default NavBar;
