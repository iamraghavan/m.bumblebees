
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAPOX2_fOrAYdyhwSy-Ofcrf7Y6kFyu71s",
    authDomain: "intricate-aria-345510.firebaseapp.com",
    projectId: "intricate-aria-345510",
    storageBucket: "intricate-aria-345510.appspot.com",
    messagingSenderId: "227588324050",
    appId: "1:227588324050:web:611857e7724afba8268b0b",
    measurementId: "G-TCRXEE0ZEB"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
