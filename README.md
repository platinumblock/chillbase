# 🥶 ChillBase
😎 It's like Firebase but better.
## 💻 How To Use
Import!<br> 
```
import * as cb from "https://platinumblock.github.io/chillbase/chillbase.js";
```
Paste Config!<br>
```
const firebaseConfig = {
    apiKey: "you",
    authDomain: "need",
    projectId: "to",
    storageBucket: "use",
    messagingSenderId: "chillbase",
    appId: "right",
    measurementId: "now"
};
```
Start!!!<br>
```
cb.start(firebaseConfig);
```
## 📋 Functions
```
start(config) //starts the database up and running

mapToList(map) //all functions return maps, so this may be useful to convert data to a list instead

getCollection(collectionName) //returns one collection
filterCollection(filterName, collectionName) //return one collection only with keys that contain the filter string
getCollectionProperty(propertyName, collectionName) //returns one collection only with one specific property for each key

getDocument(documentName, collectionName) //returns one document in one collection
setDocument(documentName, documentProperties, collectionName) //set one document in one collection
deleteDocument(documentName, collectionName) //delete one document in one collection

getProperty(propertyName, documentName, collectionName) //returns one property in one document in one collection
setProperty(propertyName, newProperty, documentName, collectionName) //set one property in one document in one collection
```




