import React, { useState, useEffect } from 'react';
import { Box } from '@mui/system';

import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";
import { exerciseOptions, fetchData } from '../utils/fetchData';

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exerciseData = [];

      if (bodyPart === 'all') {
        exerciseData = await fetchData(exerciseOptions.url, exerciseOptions);
      } else {
        exerciseData = await fetchData(`${exerciseOptions.url}/bodyPart/${bodyPart}`, exerciseOptions);
      }
      setExercises(exerciseData);
    }
    fetchExercisesData();
}, [bodyPart])

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart} />
      <Exercises
        exercises={exercises}
        exercisesPerPage={9}
        title='Showing Results'
      />
    </Box>
  )
};

export default Home