import{initializeApp} from "firebase/app";
import {getFirebaseConfig} from "./firebase-config";
import{getDatabase, ref, set, onValue, push} from "firebase/database";
import {ahorroComp} from "./ahorroComp";
import{getAuth, onAuthStateChanged} from "firebase/auth";

const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);
const auth = getAuth();

// =================================================================================== //

// Obtener usuario
auth.onAuthStateChanged(
    (user) => {
        const db = getDatabase();
        const dbref = ref(db, 'users/' + user.uid);

        onValue(dbref, (snapshot) => {
            const data = snapshot.val();
            txt_usuario.innerHTML = data.name;
        });
    }
);

auth.onAuthStateChanged(
    (user) => {
        const db = getDatabase();
        const dbRef = ref(db, 'users/' + user.uid + 'ahorros');

        onValue(dbRef, (snapshot) => {
            const dataDB = snapshot.val();
        });
    }
);

function printAhorroComp(data){
    if(data){
        
    }
}

// =================================================================================== //

const txt_usuario = document.getElementById("txt_nombreUsuario");