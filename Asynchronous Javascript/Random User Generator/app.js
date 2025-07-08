const profileImg = document.getElementById("profileImg");
const userName = document.getElementById("userName");
const userMail = document.getElementById("userMail");
const loadProfileBtn = document.getElementById("loadProfileBtn");
const spinner = document.getElementById("spinner");
// Add error message element
let errorMsg = document.getElementById("errorMsg");
if (!errorMsg) {
    errorMsg = document.createElement("div");
    errorMsg.id = "errorMsg";
    errorMsg.style.color = "red";
    errorMsg.style.marginTop = "10px";
    loadProfileBtn.parentNode.insertBefore(errorMsg, loadProfileBtn.nextSibling);
}

const getUser = async () => {
    try {
        errorMsg.innerText = ""; // Clear previous error

        // Show spinner and hide button while fetching data
        spinner.style.display = "block";
        loadProfileBtn.style.display = "none";

        const userDataFetch = await fetch(`https://randomuser.me/api/`, {
            headers: {
                Accept: 'application/json'
            }
        })

        const userData = await userDataFetch.json();
        console.log(userData);

        const user = userData.results[0];

        // Update UI once after fetching user
        profileImg.innerHTML = `<img src="${user.picture.large}" alt="Profile picture of ${user.name.first} ${user.name.last}">`;
        userMail.innerText = user.email;
        userName.innerHTML = `${user.name.title}. ${user.name.first} ${user.name.last}`;
        loadProfileBtn.innerText = "Load Another Profile";

    } catch (error) {
        errorMsg.innerHTML = "<h4>Failed to load user profile. Please try again.</h4>";
    } finally {
        spinner.style.display = "none";
        loadProfileBtn.style.display = "block"; // Show button after loading
    }
}

loadProfileBtn.addEventListener("click", getUser);

getUser();