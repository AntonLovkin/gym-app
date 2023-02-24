import { Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React from 'react';

// import Exercises from './Exercises';
import Loader from './Loader';
import HorizontalScrollbar from './HorizontalScrollbar';

function SimilarExercises({ targetMuscleExercises, equipmentExercises }) {
    return (
    <Box sx={{ mt: {lg:'100px', xs: '0'}}}>
      <Typography variant='h3' mb={5}>Exercises that target the same muscle group</Typography>
      <Stack direction="row" sx={{ p:'2', position: 'relative'}}>
        {targetMuscleExercises.length
          ? <HorizontalScrollbar data={targetMuscleExercises} />
          : <Loader />}
      </Stack>
      <Typography variant='h3' mb={5}>Exercises that use the same equipment</Typography>
      <Stack direction="row" sx={{ p:'2', position: 'relative'}}>
        {equipmentExercises.length
          ? <HorizontalScrollbar data={equipmentExercises} />
          : <Loader />}
        {/* {equipmentExercises.length
          ? <Exercises exercises={targetMuscleExercises} exercisesPerPage={3} title='Exercises that use the same equipment'/>
          : <Loader />} */}
      </Stack>
    </Box>
  )
};

export default SimilarExercises