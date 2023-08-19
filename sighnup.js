
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { auth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCjmDS0nowEnoo9hM_Gcus8WYYPNPCKA30",
    authDomain: "hackathone-8221c.firebaseapp.com",
    projectId: "hackathone-8221c",
    storageBucket: "hackathone-8221c.appspot.com",
    messagingSenderId: "940403459734",
    appId: "1:940403459734:web:c3e373f7e11e0d0005e4b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const sighnup = document.querySelector("#signupBtn")
sighnup.addEventListener("click", sighnUp)

async function sighnUp() {
    try {
        const firstname = document.getElementById("firstname").value
        const lastname = document.getElementById("Lastname").value
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        const repeatPassword = document.getElementById("repeatpassword").value

        const userAuth = await createUserWithEmailAndPassword(auth, email, password, repeatPassword)
        const uid = userAuth.user.uid

        const userObj = {
            firstname,
            lastname,
            email,
            AccountActivate: true,
            uid
        }
        const userRef = doc(db, "users", uid);
            const userDB = await setDoc(userRef, userObj)
        alert("Sighup Successful")
        window.location.replace("/")
    } catch (error) {
        console.log("error", error.message)
        alert(error.massage)

    }
}