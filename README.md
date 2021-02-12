# MacChatFirebase

1. Create Realtime Database in Firebase web console.

2. Create App in Firebase web console and copy Firebase config to Angular app.
```
export const environment = {
  production: false,
  firebase: {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: ''
  }
};
```

3. Install firebase-tools and init Firebase project
```
npm install -g firebase-tools
firebase login
firebase init
```

4. Build Angular app
```
ng build --prod
```

5. Deploy Angular to Firebase 
```
firebase deploy
```
