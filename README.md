# React Native Auth Kit

## Installation

### React

- `npm install`

### Firebase

- Go to [Firebase console](https://console.firebase.google.com/)
- Create new project
- Go to `Authentication` > `Sign-in method`
- Activate `Email/Password` & `Google`

- Create `environments.js` in `./environments` such as :
 
```js
export default firebaseConf = {
    apiKey: "API_KEY",
    authDomain: "PROJECT_ID.firebaseapp.com",
    databaseURL: "https://PROJECT_ID.firebaseio.com",
    projectId: "PROJECT_ID",
    storageBucket: "PROJECT_ID.appspot.com",
```

- Put in your own infos you'll find in the [Firebase console](https://console.firebase.google.com/) > `Your Project` > `Project Overview` > `Project settings`