const FirestoreServcie = {
    docsToArray: (docs) => {
        const restructuredData = [];
        docs.forEach(doc => {
            restructuredData.push({ id: doc.id, ...doc.data()});
        });
        return restructuredData;
    },
    docToObject: (doc) => {
        return { id: doc.id, ...doc.data() }
    }
}

export default FirestoreServcie;