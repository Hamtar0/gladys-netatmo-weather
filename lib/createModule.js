const rp = require('request-promise');
const createDevice = require('./createDevice');
const createDeviceState = require('./createDeviceState');
const emojiStrip = require('emoji-strip');

module.exports = function createModule(module_id, module_name, module_battery, module_temperature, module_humidity) {

    var newDevice = {
        device: {
            name: emojiStrip(module_name),
            protocol: 'wifi',
            service: 'netatmo',
            identifier: module_id
        },
        types: [
            {
                name: 'Temperature',
                type: 'temperature',
                identifier: module_id,
                tag: 'temperature',
                unit: '°C',
                sensor: true,
                min: 0,
                max: 50
            },
            {
                name: 'Humidity',
                type: 'humidity',
                identifier: module_id,
                tag: 'humidity',
                unit: '%',
                sensor: true,
                min: 0,
                max: 100
            },
            {
                name: 'Battery',
                type: 'battery',
                identifier: module_id,
                tag: 'battery',
                unit: '%',
                sensor: true,
                min: 0,
                max: 100
            }
        ]
    };

    createDevice(newDevice)
        .then((result) => {
            return Promise.all([
                createDeviceState(result.types[0].id, module_temperature),
                createDeviceState(result.types[1].id, module_humidity),
                createDeviceState(result.types[2].id, module_battery)
            ]);
        })
        .catch(console.log);
}