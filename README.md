# HomeMates-App
![](https://img.shields.io/npm/v/npm.svg)
![](https://img.shields.io/badge/react--native-v0.60-blue)

The React Native application using EXPO CLI with Firebase (Firestore database). This project is a tool to manage rent and utilities in a house. This solution provides rent tracking system, utilities bill splitting system, and basic household accounting system. The main objective in this project is to manage rent and utilities billing when the house owner leases an apartment/house/room/unit. It opens a new opportunity for those who have a second property (i.e. house) that is used for renting rooms. 

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
* Payment with debit/credit card
* App notification

### Extra
* Accounting system
* Manage multiple houses

## System Specifications & Architecture
This project is mainly focus in using React Native with Firestore as the main database. EXPO CLI is chosen rather than React Native CLI because it is simple in terms of deployment. It also has plenty of libraries that will suffice the requirements. The main reason for using Firebase SDK is to simplify data storage management & developers able to focus on developing features. Google Firebase also provides extensive data analytics, authentication, and email management. For the UI library, this app will be using [UI Kitten - Documentation](https://akveo.github.io/react-native-ui-kitten/docs/components/components-overview) because it has beautiful and simple UI. 

## Credits
__Riordan Dervin Alfredo__ - Lead Software Engineer / Full-stack Engineer | [profile website](https://rioalfredo.com) 

__Vincent Sutinah__ - Software Developer / Back-End Engineer | email: vincentsutinah@gmail.com

__Jason Anthony Kie__ - Software Developer / Native App Engineer | email:jasonakie28@gmail.com
