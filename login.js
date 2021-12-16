function addUser() {
    Username = document.getElementById("userinput").value;
    localStorage.setItem("Username", Username);
    window.location = "rooms.html";
}