
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyCjmDS0nowEnoo9hM_Gcus8WYYPNPCKA30",
    authDomain: "hackathone-8221c.firebaseapp.com",
    projectId: "hackathone-8221c",
    storageBucket: "hackathone-8221c.appspot.com",
    messagingSenderId: "940403459734",
    appId: "1:940403459734:web:c3e373f7e11e0d0005e4b7"
}


// const firebase = initializeApp(firebaseConfig);

const auth = getAuth();
const login = document.getElementById("loginBtn")
login.addEventListener("click", ()=> {
    let email = Document.getElementById("email")
    let password = Document.getElementById("password")



    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {

            const user = userCredential.user;
            swal("Good job!", "You clicked the button!", "Log in success");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

        });
})