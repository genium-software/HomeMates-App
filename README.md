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
This project is built by consuming RESTful API that connects React Native Apps (Android and IOs). It uses Redux to manage states accross the app. To fetch data from RESTful API, it utilises Axios library instead of native 'fetch' method from React. 

## Credits
__Riordan Dervin Alfredo__ - Lead Software Engineer / Front-End Engineer | [profile website](https://rioalfredo.com) 

__Vincent Sutinah__ - Software Developer / Back-End Engineer | email: vincentsutinah@gmail.com

__Jason Anthony Kie__ - Software Developer / Native App Engineer | email:jasonakie28@gmail.com
