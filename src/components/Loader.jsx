import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const Loader = () => {
  return (
    <Stack spacing={1}>
      <Skeleton variant="rectangular" width={210} height={118} />
      <Skeleton variant="text" width={200} height={40}  />
      <Skeleton variant="text" width={160} height={40}  />
    </Stack>
  );
}

export default Loader