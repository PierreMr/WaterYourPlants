import { useState, useEffect } from 'react';
import firebase from 'firebase';

const UseUser = () => {
    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    // const [loading, setLoading] = useState();

    // Handle user state changes
    function onAuthStateChanged(user) {
      setUser(user);
      if (initializing) setInitializing(false);

      if (user) {
        const docUser = firebase.firestore().collection("users").doc(user.uid);
        
        docUser.get()
        .then(doc => {
          if (!doc.exists) {
            docUser.set({
              uid: user.uid,
              name: user.displayName,
              createdAt: firebase.firestore.FieldValue.serverTimestamp()
            })
          }
        })
      }
    }

    useEffect(() => {
        const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    return [user, initializing];
};

export default UseUser;