import cron from "node-cron";
import axios from "axios";
import City from "./models/City";
import { cities, CityData } from "./configs/cities";

const updateCity = async (city: { id: any; name: any; coord: any }) => {
  try {
    const record = {
      cityId: city.id,
      name: city.name,
      coords: city.coord
    };
    await City.create(record);
  } catch (err) {
    console.log(err);
  }
};

const update = async (cities: CityData[]) => {
  const ids = cities.map((el): number => el.id).join(",");
  const url = `http://api.openweathermap.org/data/2.5/group?id=${ids}&appid=${process.env.API_KEY}&units=metric`;
  const response = await axios.get(url);
  const { list } = response.data;
  list.forEach((city: { id: any; name: any; coord: any }) => {
    updateCity(city);
  });
};

setTimeout(() => {
  update(cities);
}, 3000);

// cron.schedule("* * * * *", (): void => {
//   update(cities);
// });
