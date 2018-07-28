class Storage {
    constructor(city) {
        this.city;
        this.defaultCity = 'Waikato';

    }

    getLocationData() {

        if (localStorage.getItem('city') === null) {
            this.city = this.defaultCity;

        } else {
            this.city = localStorage.getItem('city');
        }

        return {
            city: this.city
        }
    }

    setLocationData(city) {
        localStorage.setItem('city', city);

    }
}