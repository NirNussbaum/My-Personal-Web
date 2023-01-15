
/*Header Div*/
const imNirNussbaum = document.querySelector(".head-Div h1");
const sen = imNirNussbaum.textContent.trim().split("");
let i = 0;
const writeNirNussbaum = () => {
    i = 0;
    imNirNussbaum.textContent = "";
    time = setInterval(addLetter, 175)
}

const addLetter = () => {
    if (i == sen.length) clearInterval(time);
    else {
        imNirNussbaum.textContent += sen[i];
        i++
    }
}
writeNirNussbaum();
setInterval(writeNirNussbaum, 10000);

/*Employment div*/
const parIcon = document.querySelector(".paratrooperImage");
const parDiv = document.querySelector(".paratroopers-div");
const busManIcon = document.querySelector(".businessmanImage");
const busManDiv = document.querySelector(".ganim-div");
//Change current div depend on icon click.
parIcon.addEventListener("click", () => {
    parIcon.classList.remove("opacity-50")
    busManIcon.classList.add("opacity-50")
    parDiv.classList.remove("d-none");
    busManDiv.classList.add("d-none");
});
busManIcon.addEventListener("click", () => {
    parIcon.classList.add("opacity-50")
    busManIcon.classList.remove("opacity-50")
    busManDiv.classList.remove("d-none");
    parDiv.classList.add("d-none");
});


/*Projects & Hobbies div*/
const navProjects = document.querySelector("#navProjects");
const projectsDiv = document.querySelector(".Projects");
const navHobbies = document.querySelector("#navHobbies");
const hobbiesDiv = document.querySelector(".Hobbies");
//Change current div depend on icon click.
navProjects.addEventListener("click", () => {
    navProjects.classList.add("active")
    navHobbies.classList.remove("active")
    projectsDiv.classList.remove("d-none");
    hobbiesDiv.classList.add("d-none");
});
navHobbies.addEventListener("click", () => {
    navProjects.classList.remove("active")
    navHobbies.classList.add("active")
    hobbiesDiv.classList.remove("d-none");
    projectsDiv.classList.add("d-none");
});


/*Contact Me*/
const contactMeForm = document.querySelector('.contactMeForm');
const firstNameElement = contactMeForm.FirstName;
const lastNameElement = contactMeForm.LastName;
const subjectElement = contactMeForm.emailSubject;
const emailTextareaElement = contactMeForm.emailTextarea;

// add/remove Bootstrap class.
const addClassIsInVaild = element => {
    element.classList.remove('is-valid');
    element.classList.add('is-invalid');
}
// add/remove Bootstrap class.
const addClassIsVaild = element => {
    element.classList.remove('is-invalid');
    element.classList.add('is-valid');
}

//First Name Check  + event listener
const firstNameCheck = () => {
    if (firstNameElement.value.length < 2 || /[0-9]/.test(firstNameElement.value)) {
        addClassIsInVaild(firstNameElement);
        return false;
    }
    else {
        addClassIsVaild(firstNameElement);
        return true;
    }
}
firstNameElement.addEventListener('keydown', firstNameCheck);

//Last Name Check + event listener
const lastNameCheck = () => {
    if (lastNameElement.value.length < 2 || /[0-9]/.test(lastNameElement.value)) {
        addClassIsInVaild(lastNameElement);
        return false;
    }
    else {
        addClassIsVaild(lastNameElement);
        return true;
    }
}
lastNameElement.addEventListener('keydown', lastNameCheck);

//Email Subject Check + event listener
const subjectElementCheck = () => {
    if (subjectElement.value.length < 2) {
        addClassIsInVaild(subjectElement);
        return false;
    }
    else {
        addClassIsVaild(subjectElement);
        return true;
    }
}
subjectElement.addEventListener('keydown', subjectElementCheck);

//Email Check + event listener
const emailTextareaCheck = () => {
    if (emailTextareaElement.value.length < 4) {
        addClassIsInVaild(emailTextareaElement);
        return false;
    }
    else {
        addClassIsVaild(emailTextareaElement);
        return true;
    }
}
emailTextareaElement.addEventListener('keydown', emailTextareaCheck);


//Form event listener
contactMeForm.addEventListener('submit', e => {
    if (firstNameCheck() && lastNameCheck() && subjectElementCheck() && emailTextareaCheck()) {
        const sendButton = document.querySelector("#sendButton");
        sendButton.setAttribute('value', 'Thank You!')
    } else {
        e.preventDefault();
    }
})