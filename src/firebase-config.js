const firebaseConfig = {
    apiKey: "AIzaSyAxCkEAQBCVH7ZRLWb7U7wkpFARnYe_BN0",
    authDomain: "eco-proyectoparcial2.firebaseapp.com",
    databaseURL: "https://eco-proyectoparcial2-default-rtdb.firebaseio.com",
    projectId: "eco-proyectoparcial2",
    storageBucket: "eco-proyectoparcial2.appspot.com",
    messagingSenderId: "163384309508",
    appId: "1:163384309508:web:7a0612c6bb33a0eafc4251"
  };

  export function getFirebaseConfig(){
    if(!firebaseConfig || !firebaseConfig.apiKey){
        throw new Error("Firebase configuration error");
    }else{
        return firebaseConfig;
    }
  }