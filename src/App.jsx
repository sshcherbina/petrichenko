import NavBar from './components/NavBar';
import Statistic from './components/Statistic';
import { Box, Button, Grid, IconButton, ListItemButton, Stack, Typography } from '@mui/material';
import StartImg from './components/StartImg';
import NewsFeed, { newsList } from './components/NewsFeed';
import Editor from './components/Editor';
import Regions from './components/Regions';
import Videos from './components/Videos';

import SectionTitle from './components/helpers/SectionTitle';
import largeNews from './assets/large-news.png';
import uuid from 'react-uuid';
import NewsTimeList from './components/helpers/NewsTimeList';
import MoreNewsButton from './components/helpers/MoreNewsButton';
import './index.css';

const articles = [
  {
    image: largeNews,
    date: `${'05 СЕРПНЯ 11:00'}`,
    text: `${`У "Слузі" пояснили, чому в росії знову
    заговорили про переговори з Україною.`}`,
  },
  {
    image: largeNews,
    date: `${'05 СЕРПНЯ 11:00'}`,
    text: `${`У "Слузі" пояснили, чому в росії знову
    заговорили про переговори з Україною.`}`,
  },
  {
    image: largeNews,
    date: `${'05 СЕРПНЯ 11:00'}`,
    text: `${`ТРЦ Ocean Plaza після чуток про закриття
    оголосив про відновлення роботи.`}`,
  },
];

// const theme = createTheme({
//   typography: {
//     fontFamily: 'TT Severs',
//     fontSize: 16,
//     fontWeightLight: 400,
//     fontWeightRegular: 400,
//     fontWeightMedium: 400,
//     fontWeightBold: 400,
//   },
// });

const App = () => {
  return (
    // <ThemeProvider theme={theme}>
    <Stack sx={{ maxWidth: 1440, m: '0 auto' }}>
      Всі
      <Box>Bci</Box>
      <Box fontWeight={600}>Bci</Box>
      <Box sx={{fontWeight: 700}}>Bci</Box>
      <Box sx={{fontWeight: 500}}>Bci</Box>
      <ListItemButton>Bci</ListItemButton>
      <Box sx={{fontWeight: 400}}>Bci</Box>
      <Typography>Всі</Typography>
      <NavBar />
      <Statistic />
      <StartImg />
      <Grid
        container
        sx={{
          p: { md: '0 2%', lg: '4%' },
          bgcolor: '#F6F6F6',
          pt: { sm: 4, md: 6 },
          pb: { sm: 3 },
        }}
      >
        <NewsFeed />
        <Grid item xs={12} sm={6} md={9}>
          <Editor />
          <Regions />
        </Grid>
      </Grid>
      <Videos />
      <Grid
        container
        // spacing={{ xs: 1, lg: 3 }}
        sx={{
          p: { md: '0 1%', lg: '0 4%' },
          bgcolor: '#F6F6F6',
          pt: { sm: 6 },
          pb: { sm: 3 },
        }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Stack
            sx={{
              p: 2,
              bgcolor: '#FFFFFF',
              maxWidth: { xs: 600, md: 272 },
            }}
          >
            <SectionTitle
              title={'Колонки'}
              titleSize={24}
              titleWeight={600}
              buttonText={'Всі колонки'}
            />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={9}>
          <Stack sx={{ p: 3, bgcolor: '#FFFFFF' }}>
            <SectionTitle title={'Політика'} />
            <Grid container>
              <Grid item xs={12} sm={12} md={8}>
                <Stack sx={{ mt: 2 }}>
                  <img src={articles[0].image} />
                  <Typography sx={{ fontSize: 12, mt: 2, color: '#707070' }}>
                    {articles[0].date}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: 16, md: 24 },
                      fontWeight: 600, //{ xs: 400, md: 600 },
                      color: '#182840',
                      mt: 2,
                    }}
                  >
                    {articles[0].text}
                  </Typography>
                </Stack>
                <Grid container spacing={{ xs: 1, lg: 3 }} sx={{ mt: 1 }}>
                  {articles.slice(1).map((article) => (
                    <Grid key={uuid()} item xs={12} sm={12} md={6}>
                      <Stack>
                        <img src={article.image} />
                      </Stack>
                      <Typography
                        sx={{ fontSize: 12, mt: 2, color: '#707070' }}
                      >
                        {article.date}
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: 600, //{ xs: 400, md: 600 },
                          color: '#182840',
                          mt: 2,
                        }}
                      >
                        {article.text}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <Stack spacing={2}>
                  <Typography sx={{ fontWeight: 500 }}>
                    НОВИНИ РОЗДІЛУ
                  </Typography>
                  <Stack sx={{ overflow: 'auto', maxHeight: 650 }}>
                    <NewsTimeList list={newsList} />
                  </Stack>
                  <MoreNewsButton short={true} />
                </Stack>
              </Grid>
              {/* <Grid container spacing={{ xs: 1, lg: 3 }} sx={{ mt: 1 }}>
                {articles.slice(1).map((article) => (
                  <Grid key={uuid()} item xs={12} sm={12} md={4}>
                    <Stack>
                      <img src={article.image} />
                    </Stack>
                    <Typography sx={{ fontSize: 12, mt: 2, color: '#707070' }}>
                      {article.date}
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: 600, //{ xs: 400, md: 600 },
                        color: '#182840',
                        mt: 2,
                      }}
                    >
                      {article.text}
                    </Typography>
                  </Grid>
                ))}
              </Grid> */}
              {/* </Stack> */}

              <Grid item xs={12} sm={6} md={12}></Grid>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
    // </ThemeProvider>
  );
};

export default App;
