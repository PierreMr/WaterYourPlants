import firebase from "firebase";
import EventEmitter from "./../../../_common/services/EventEmitter";

const emitter = new EventEmitter();
export const addHabitatListener = (listener) => emitter.addListener(listener);

const HabitatService = {
  getAll: async () => await firebase.firestore().collection("habitats").where("users", "array-contains", firebase.auth().currentUser.uid).orderBy("createdAt").get(),
  post: async (body) => {
    const data = {
      ...body,
      users: [firebase.auth().currentUser.uid],
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    };

    let habitat = await firebase.firestore().collection("habitats").add(habitatData).then(newHabitat => {
      habitat = { id: newHabitat.id, ...habitatData }
      emitter.trigger({ method: "post", id: undefined });
    
      return habitat;
    });
  }
};

export default HabitatService;
