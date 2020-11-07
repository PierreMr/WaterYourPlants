# React Native Auth Kit

- [React Native Auth Kit](#react-native-auth-kit)
  - [Installation](#installation)
    - [React](#react)
    - [Firebase](#firebase)
      - [Google Auth](#google-auth)
      - [Facebook Auth](#facebook-auth)

## Installation

### React

- `npm install`

### Firebase

- Go to [Firebase console](https://console.firebase.google.com/)
- Create a new project
- Create `environments.js` in `./environments` such as :
- 
```js
export default firebaseConf = {
    apiKey: "API_KEY",
    authDomain: "PROJECT_ID.firebaseapp.com",
    databaseURL: "https://PROJECT_ID.firebaseio.com",
    projectId: "PROJECT_ID",
    storageBucket: "PROJECT_ID.appspot.com",
```

- Put in your own infos you'll find in the [Firebase console](https://console.firebase.google.com/) > `Your Project` > `Project Overview` > `Project settings`

#### Google Auth

- In the [Firebase console](https://console.firebase.google.com/) > `Your Project` > `Authentication` > `Sign-in method`
- Activate `Google`

#### Facebook Auth

- Go to [Facebook for Developers](https://developers.facebook.com/)
- Create a new app
- Go to `Settings` > `Basic`
- Get the `App ID` & `App Secret`
- In the [Firebase console](https://console.firebase.google.com/) > `Your Project` > `Authentication` > `Sign-in method`
- Activate `Facebook`
- Put in your `App ID` & `App Secret`
- Paste the `OAuth redirect URI (e.g. my-app-12345.firebaseapp.com/__/auth/handler)` in the [Facebook for Developers](https://developers.facebook.com/) > `Your App` > `Facebook Login` > `Settings` > `Valid OAuth redirect URIs` section