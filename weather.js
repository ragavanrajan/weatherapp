class Weather {
    constructor(city) {
        this.apiKey = '1c1ace7e9ae554c9b82cee73479b0d8b';
        this.city = city;
    }

    // Fetch weather from API 

    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apiKey}&units=metric`);

        const responseData = await response.json();
        return responseData;

        //** you can try with responseData.main */
        // return responseData.main;
        console.log(responseData);

    }

    // Change weather location
    changeLocation(city) {
        this.city = city;
    }
}
