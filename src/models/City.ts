import mongoose, { Schema, Document, mongo } from "mongoose";

export interface CityInterface extends Document {
  cityId: number;
  name: string;
  coords: { lot: number; lat: number };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  wind: { speed: number; deg: number };
  main: {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
  };
}

const CitySchema: Schema = new mongoose.Schema(
  {
    // Base
    cityId: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    coords: {
      type: Object,
      required: true
    },

    // Current weather data
    wind: {
      type: Object
    },
    main: {
      type: Object
    },
    weather: {
      type: Object
    }
  },
  {
    timestamps: true
  }
);

const Model = mongoose.model<CityInterface>("City", CitySchema, "cities");

export default Model;
