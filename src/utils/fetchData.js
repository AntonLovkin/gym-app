const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

const youtubeOptions = {
  method: 'GET',
   headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

const fetchData = async (url, options) => {
  // console.log(url);
  // console.log(options);
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
};

export {exerciseOptions, fetchData, youtubeOptions}