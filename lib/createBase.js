const rp = require('request-promise');
const createDevice = require('./createDevice');
const createDeviceState = require('./createDeviceState');
const emojiStrip = require('emoji-strip');

module.exports = function createBase(base_id, base_name, base_temperature, base_humidity, base_pressure, base_noise, base_co2) {

    var newDevice = {
        device: {
            name: emojiStrip(base_name),
            protocol: 'wifi',
            service: 'netatmo',
            identifier: base_id
        },
        types: [
            {
                name: 'Temperature',
                type: 'temperature',
                identifier: 'temperature',
                tag: 'temperature',
                unit: '°C',
                sensor: true,
                min: 0,
                max: 50
            },
            {
                name: 'Humidity',
                type: 'humidity',
                identifier: 'humidity',
                tag: 'humidity',
                unit: '%',
                sensor: true,
                min: 0,
                max: 100
            },
            {
                name: 'Pressure',
                type: 'pressure',
                identifier: 'pressure',
                tag: 'pressure',
                unit: 'mb',
                sensor: true,
                min: 260,
                max: 1160
            },
            {
                name: 'Noise',
                type: 'noise',
                identifier: 'noise',
                tag: 'noise',
                unit: 'dB',
                sensor: true,
                min: 35,
                max: 110
            },
            {
                name: 'CO2',
                type: 'co2',
                identifier: 'co2',
                tag: 'co2',
                unit: 'ppm',
                sensor: true,
                min: 0,
                max: 5000
            }
        ]
    };

    createDevice(newDevice)
        .then((result) => {
            return Promise.all([
                createDeviceState(result.types[0].id, base_temperature),
                createDeviceState(result.types[1].id, base_humidity),
                createDeviceState(result.types[2].id, base_pressure),
                createDeviceState(result.types[3].id, base_noise),
                createDeviceState(result.types[4].id, base_co2)
            ]);
        })
        .catch(console.log);
}