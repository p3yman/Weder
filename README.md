# ⛅️ Weder

A Node.js application to work as a wrapper to OpenWeather API.

It gets weather data for "Current" and "5 day weather forecast" APIs from OpenWeather and saves the results in database.

If you're using a paid subscription from OpenWeather, then this application may not be useful to you as it calculate the registered cities count and make a `cronjob` to get requests fit in *free 60 per minute* plan.



## Installation
#### Via GitHub

* Clone the [GitHub repository](https://github.com/peyman3d/Weder/) : `git clone https://github.com/peyman3d/Weder.git`
* Or download the [zip file](https://github.com/peyman3d/Weder/archive/master.zip) and extract it.
* Go to prject folder.
* Create `.env` file using the template: `cp .env.example .env`
* Fill the `.env` file with 2 important values:
    * `DATABASE`: monogoDB database address.
    * `API_KEY`: A valid OpenWeather API key that you can get from [here](https://openweathermap.org/appid)
* Install the packages using `npm install`
* Run the application using `npm run dev`



## Roadmap
- [ ] Add more cities
- [ ] Add APIs to get data from database
- [ ] Add npm and yarn install documention



## Contributing
I'm happy about every **pull request** you open and **issue** you find to help make this API **more awesome**. Please note that it might sometimes take me a while to get back to you. Feel free to ping me if I don't respond.



## License
This project is licensed under the MIT license.
Please see the [LICENSE file](https://github.com/peyman3d/Weder/blob/master/LICENSE)
distributed with this source code for further information regarding copyright and licensing.

Be aware that the OpenWeatherMap data is **not licensed under the MIT**.
**Check out the following official links to read about the terms, pricing and license of OpenWeatherMap before using their service:**

- [OpenWeatherMap.org/terms](http://OpenWeatherMap.org/terms)
- [OpenWeatherMap.org/appid](http://OpenWeatherMap.org/appid)
