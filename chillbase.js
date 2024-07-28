import {initializeApp} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js"
import {getFirestore, collection, doc, getDocs, setDoc, deleteDoc} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js"

var firebaseConfig;
var app;
var db;

export function start(config){
    firebaseConfig = config;
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
}

export function mapToList(map){
    var list = [];
    for(var [key, value] of map){
        list.push(value);
    }
    return list;
}

export async function getCollection(collectionName) {
    var col = collection(db, collectionName);
    var colSnapshot = await getDocs(col);
    var colMap = new Map();
    for(var i = 0; i < colSnapshot.docs.length; i++){
        var doc = colSnapshot.docs[i];
        colMap.set(doc.id, doc.data());
    }
    return colMap;
}

export async function filterCollection(filterName, collectionName){
    var colMap = await getCollection(collectionName);
    var filterMap = new Map();
    for(var [key, value] of colMap){
        if(key.includes(filterName)){
            filterMap.set(key, value);
        }
    }
    return filterMap;
}

export async function getCollectionProperty(propertyName, collectionName){
    var colMap = await getCollection(collectionName, "Map");
    var propMap = new Map();
    for(var [key, value] of colMap){
        propMap.set(key, value[propertyName]);
    }
    return propMap;
}

export async function getDocument(documentName, collectionName){
    var colMap = await getCollection(collectionName)
    return colMap.get(documentName);
}

export async function setDocument(documentName, documentProperties, collectionName){
    await setDoc(doc(db, collectionName, documentName), documentProperties);
}

export async function deleteDocument(documentName, collectionName){
    await deleteDoc(doc(db, collectionName, documentName));
}

export async function getProperty(propertyName, documentName, collectionName){
    var doc = await getDocument(documentName, collectionName);
    return doc[propertyName];
}

export async function setProperty(propertyName, newProperty, documentName, collectionName){
    var props = await getDocument(documentName, collectionName);
    props[propertyName] = newProperty;
    await setDocument(documentName, props, collectionName);
}


