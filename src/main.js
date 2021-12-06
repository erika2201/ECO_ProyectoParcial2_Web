import{initializeApp} from "firebase/app";
import {getFirebaseConfig} from "./firebase-config";
import{getDatabase, ref, set, onValue, push} from "firebase/database";
import {ahorroComp} from "./ahorroComp";
import{getAuth, onAuthStateChanged} from "firebase/auth";

const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);
const auth = getAuth();

// =================================================================================== //

const txt_usuario = document.getElementById("txt_nombreUsuario");
const compSpace = document.getElementById("compSpace");
const bn_logOut = document.getElementById("bn_logOut");

// =================================================================================== //

// Obtener usuario
auth.onAuthStateChanged(
    (user) => {
        const db = getDatabase();
        const dbref = ref(db, 'users/' + user.uid);
        const dbRef = ref(db, 'users/' + user.uid + '/ahorros');

        onValue(dbref, (snapshot) => {
            const data = snapshot.val();
            txt_usuario.innerHTML = data.name;
        });

        onValue(dbRef, (snapshot) => {
            const dataDB = snapshot.val();
            printAhorroComp(dataDB);
        });
    }
);


// Imprimir componentes
function printAhorroComp(data){
    if(data){
        Object.keys(data).forEach((k, index) => {
            console.log(k, index);
            const ahorro = new ahorroComp(data[k]);

            compSpace.appendChild(ahorro.render());
        });
    }
}

// =================================================================================== //

// LogOut
bn_logOut.addEventListener('click', () => {
    auth.signOut();
    window.location.href = "login.html";
});