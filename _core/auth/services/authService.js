import firebase from 'firebase';
import EventEmitter from "./../../../_common/services/EventEmitter";

const emitter = new EventEmitter();
export const addUserListener = (listener) => emitter.addListener(listener);

const AuthService = {
    getUser: firebase.auth().currentUser,
}

export default AuthService;