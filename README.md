# HomeMates-App
![](https://img.shields.io/npm/v/npm.svg)
![](https://img.shields.io/badge/react--native-v0.60-blue)

The React Native application using EXPO CLI to consume REST API of HomeMates-API. This project is a tool to manage rent and utilities in a house. This solution provides rent tracking system, utilities split payment, and basic household accounting system. The main objective in this project is to manage rent and utilities billing system when the house owner leases an apartment/house/room/unit. It opens a new opportunity for those who have a second property (i.e. house) that is used for renting rooms. 

## Installation and Running the application
* [Install node.js and npm](https://wsvincent.com/install-node-js-npm-windows/)
* Install dependencies on both Server & Client
```
  npm install     //to install server dependencies
```
* Run the application 
```
  expo start
```
* Install EXPO in Google Play Store / Apple Store
* Open Barcode Scanner & Scan the generated barcode to run the application

## Features
### Main
* Splitting Bills
* Uploading Bill receipt
* Payment with debit/credit card or PayPal
* Email and web notification

### Extra
* Accounting system
* Manage multiple houses

## System Specifications & Architecture
This project is built by consuming RESTful API that connects React Native Apps(Android and IOs). MongoDB is complemented with MongooseJS to help converts schemas into NoSQL queries. This main repository provides REST API data and a landing page for marekting purposes.

Below are the basic architecture of this repository:
```
├── app.js
├── config
├── db
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.pug
    ├── index.pug
    └── layout.pug
```    

## Credits
Riordan Dervin Alfredo - Lead Software Engineer / Front-End Engineer | [profile website](https://rioalfredo.com) 

Vincent Sutinah - Software Developer / Back-End Engineer | email: vincentsutinah@gmail.com

Jason Anthony Kie - Software Developer / Native App Engineer | email:jasonkie@gmail.com
