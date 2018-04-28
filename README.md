# gladys-netatmo-weather

The goal of this module is to receive datas from the Netatmo Weather Station

## Hardware

- [Netatmo Weather Station](https://www.netatmo.com/en-US/product/weather/)

## Prerequisite

- Create a free app on [Netatmo dev platform](https://dev.netatmo.com/myaccount/)
- Put the name you want for your app and a description, that's all.
- In technical parameters, copy Client ID and Client Secret for the config.js (description above)

## Installation

Connect to your Raspberry Pi. 

Clone this repository : 

```
git clone https://github.com/Hamtar0/gladys-netatmo-weather
```

Go the directory :

```
cd gladys-netatmo-weather
```

Install the dependencies : 

If you have yarn (pre-installed on Gladys Raspbian image), just do :

```
yarn install
```

If not, you can do :

```
npm install
```

You now need to modify the `config.js` file :

```
nano config.js
```

Edit each line with your configuration.

Then, execute :

```
pm2 start /home/pi/gladys-netatmo-weather/app.js --name gladys-netatmo-weather
```

So that gladys-netatmo-weather run in background :)

## Debug

To debug, you can see logs by calling : 

```
pm2 logs gladys-netatmo-weather
```