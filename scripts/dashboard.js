db.collection('house').get().then(snapshot => {
    setupHouse(snapshot.docs);
})

const logoutButton = document.querySelector("#logout");

logoutButton.addEventListener('click', (e) => {
    auth.signOut();
    console.log("Success");
    window.open("home-page.html");
})