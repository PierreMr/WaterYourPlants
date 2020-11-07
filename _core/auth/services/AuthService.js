import firebase from 'firebase';
import EventEmitter from "./../../../_common/services/EventEmitter";

const emitter = new EventEmitter();
export const addUserListener = (listener) => emitter.addListener(listener);

const AuthService = {
    user: () => firebase.auth().currentUser,
    logout: () => firebase.auth().signOut(),
}

export default AuthService;