var netatmo = require('netatmo');
var createBase = require('./lib/createBase');
var createModule = require('./lib/createModule');
const config = require('./config.js');
 
var auth = {
  "client_id": config.client_id,
  "client_secret": config.client_secret,
  "username": config.username,
  "password": config.password,
};

var api = new netatmo(auth);

api.on("error", function(error) {
    // When the "error" event is emitted, this is called
    console.error('Netatmo threw an error: ' + error);
});
 
api.on("warning", function(error) {
    // When the "warning" event is emitted, this is called
    console.log('Netatmo threw a warning: ' + error);
});
 
var getStationsData = function(err, devices) {
    var modules = devices[0].modules;
    var base_id = devices[0]._id;
    var base_name = devices[0].module_name;
    var base_temperature = devices[0].dashboard_data.Temperature;
    var base_humidity = devices[0].dashboard_data.Humidity;
    var base_pressure = devices[0].dashboard_data.Pressure;
    var base_noise = devices[0].dashboard_data.Noise;
    var base_co2 = devices[0].dashboard_data.CO2;
    // console.log(devices[0]);
    createBase(base_id, base_name, base_temperature, base_humidity, base_pressure, base_noise, base_co2);

    var modules = devices[0].modules;
    modules.forEach(element => {
        //console.log (element);
        var module_id = element._id;
        var module_name = element.module_name;
        var module_battery = element.battery_percent;
        var module_temperature = element.dashboard_data.Temperature;
        var module_humidity = element.dashboard_data.Humidity;
        createModule(module_id, module_name, module_battery, module_temperature, module_humidity);
    });
};

// Event Listeners
api.on('get-stationsdata', getStationsData);
 
// Get Stations Data
// See docs: https://dev.netatmo.com/doc/methods/getstationsdata
api.getStationsData();

function request() {
    console.log('Request from Netatmo API...')
    api.getStationsData();
}

setInterval(request, 10000);
