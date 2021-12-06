import{initializeApp} from "firebase/app";
import {getFirebaseConfig} from "./firebase-config";
import{getAuth, signInWithEmailAndPassword} from "firebase/auth";

const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);
const auth = getAuth();

// =================================================================================== //

function iniciarSesion(e, event){
    signInWithEmailAndPassword(auth, usuario.value, contraseña.value)
    .then((userCredentials) => {
        console.log(userCredentials);

        window.location.href = "main.html";
    }).catch((error) => {
        console.log(error.message);
    });
}

// =================================================================================== //

const usuario = document.getElementById("in_usuario");
const contraseña = document.getElementById("in_contraseña");
const iniSes = document.getElementById("bn_iniSes");

// =================================================================================== //

function aviso(e, event){
    console.log('hubo click');
}

iniSes.addEventListener("click", iniciarSesion);