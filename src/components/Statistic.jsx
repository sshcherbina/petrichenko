import { Box, Typography } from '@mui/material';
import orc from '../assets/good-orc.svg';
import tank from '../assets/tank.svg';
import gun from '../assets/gun.svg';
import aircraft from '../assets/aircraft.svg';
import missile from '../assets/missile.svg';
import helicopter from '../assets/helicopter.svg';
import armoredCar from '../assets/armored-car.svg';

const Statistic = () => {
  const day = 131,
    goodOrcs = 36200,
    tanks = 1589,
    guns = 657,
    aircrafts = 220,
    helicopters = 190,
    missiles = 246,
    armoredCars = 4578;

  return (
    <Box
      sx={{
        bgcolor: '#121B30',
        maxHeight: 32,
        display: 'flex',
        color: 'white',
        p: '0 4%',
      }}
    >
      <Typography sx={{ minWidth: 120 }}>{`${day} день війни:`}</Typography>
      <Box
        sx={{
          display: 'flex',
          overflowX: 'auto',
          alignItems: 'center',
        }}
      >
        {[
          {
            name: `${'особовий'}${'\u00A0'}${'склад'}`,
            stat: `~${goodOrcs}`,
            icon: orc,
          },
          { name: 'танки', stat: tanks, icon: tank },
          { name: 'артсистеми', stat: guns, icon: gun },
          { name: 'РСЗВ', stat: missiles, icon: missile },
          { name: 'літаки', stat: aircrafts, icon: aircraft },
          { name: 'гелікоптери', stat: helicopters, icon: helicopter },
          { name: 'ББМ', stat: armoredCars, icon: armoredCar },
        ].map((item) => (
          <Box key={item.name} sx={{ display: 'flex', ml: 5 }}>
            <img src={item.icon} width='20px' />
            <Typography sx={{ ml: 2 }}>{item.name}</Typography>
            <Typography sx={{ ml: 1, color: '#FF7534' }}>
              {item.stat}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default Statistic;
