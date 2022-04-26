export const getWeatherData = async (city: string = 'buenos aires') => {
  let APIkey: string = '58f7d8b301ccc20fddef6d5dfe013c52';

  if (city.trim() === '') {
    throw new Error('Enter a city please');
  }

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?&q=${city}&appid=${APIkey}&units=metric`
  );
  const data = await res.json();

  if (data.cod != '200') {
    throw new Error('Invalid city, please enter another');
  }

  return data;
};
