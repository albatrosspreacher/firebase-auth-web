const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = loginForm['email'].value;
  const password = loginForm['pass'].value;

  // log n the user
  auth.signInWithEmailAndPassword(email, password).then(cred => {
    console.log(cred.user);
    window.open("dashboard.html");
  });
});
