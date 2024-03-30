class Weather {
    constructor(weekWeather) {
        this.weekWeather = weekWeather;
    }

    getAverageTemperature() {
        const temperatures = Object.values(this.weekWeather);
        const sum = temperatures.reduce((acc, cur) => acc + cur, 0);
        return sum / temperatures.length;
    }

    getMaxTemperature() {
        return Math.max(...Object.values(this.weekWeather));
    }

    getMinTemperature() {
        return Math.min(...Object.values(this.weekWeather));
    }

    print() {
        console.log('| Day       | Temperature |');
        console.log('--------------------------');
        for (const [day, temperature] of Object.entries(this.weekWeather)) {
            console.log(`| ${day.padEnd(10)}| ${temperature.toString().padEnd(12)}|`);
            console.log('--------------------------');
        }
    }
}

const weekWeather = {
    'Monday': 25,
    'Tuesday': 20,
    'Wednesday': 18,
    'Thursday': 24,
    'Friday': 15,
    'Saturday': 17,
    'Sunday': 20
};

const weather = new Weather(weekWeather);
weather.print();

console.log('Average Temperature:', weather.getAverageTemperature());
console.log('Max Temperature:', weather.getMaxTemperature());
console.log('Min Temperature:', weather.getMinTemperature());