import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';


export default function LinearDeterminate(prop) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(prop.value)
      console.log(prop.value)
    }, 500);


  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress variant="determinate" sx={{
    backgroundColor: `#3e4148`,
    borderRadius : `5px`,

    "& .MuiLinearProgress-bar": {
      backgroundColor: `#f6b846`
    }
  }} value={progress} />
    </Box>
  );
}