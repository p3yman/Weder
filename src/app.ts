import express, { Application, Request, Response } from "express";

const app: Application = express();

import City from "./models/City";

app.get("/", async (req: Request, res: Response) => {
  try {
    const results = await City.create({
      cityId: 3169070,
      name: "Roma",
      coords: {
        lon: 12.4839,
        lat: 41.894741
      }
    });
    res.status(200).json({
      metadata: {},
      results
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Run cron jobs
import "./jobs";

export default app;
