import express, { Application, Request, Response } from "express";
import axios from "axios";

const app: Application = express();

import { cities, City } from "./configs/cities";

app.get("/", (req: Request, res: Response) => {
  const ids = cities.map((el: City): number => el.id).join(",");
  console.log(ids);
  const url = `http://api.openweathermap.org/data/2.5/group?id=${ids}&appid=${process.env.API_KEY}&units=metric`;
  console.log(url);
  axios.get(url).then(response => {
    res.status(200).json({
      status: "success",
      results: response.data
    });
  });
});

// Run cron jobs
// import "./jobs";

export default app;
