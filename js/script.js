// =========================
// ROADMAP TOGGLE
// =========================

function toggleRoadmap(id){

    const roadmap =
    document.getElementById(id);

    if(!roadmap){
        return;
    }

    if(
        roadmap.style.display === "block"
    ){

        roadmap.style.display = "none";
    }

    else{

        roadmap.style.display = "block";
    }
}



// =========================
// AI CAREER RECOMMENDATION
// =========================

function getCareerSuggestion(){

    const interest =
    document.getElementById("interest");

    const suggestionBox =
    document.getElementById("suggestionBox");

    if(
        !interest ||
        !suggestionBox
    ){
        return;
    }

    const value =
    interest.value;

    let output = "";

    if(value === ""){

        output =
        "Please select your interest.";
    }

    else if(value === "coding"){

        output =

        `
        <h3>Recommended Careers</h3>

        <ul>

        <li>Frontend Developer</li>
        <li>Backend Developer</li>
        <li>Full Stack Developer</li>
        <li>Software Engineer</li>

        </ul>
        `;
    }

    else if(value === "security"){

        output =

        `
        <h3>Recommended Careers</h3>

        <ul>

        <li>Cybersecurity Analyst</li>
        <li>Ethical Hacker</li>
        <li>Security Engineer</li>

        </ul>
        `;
    }

    else if(value === "data"){

        output =

        `
        <h3>Recommended Careers</h3>

        <ul>

        <li>Data Analyst</li>
        <li>Data Scientist</li>
        <li>Machine Learning Engineer</li>

        </ul>
        `;
    }

    else if(value === "design"){

        output =

        `
        <h3>Recommended Careers</h3>

        <ul>

        <li>UI/UX Designer</li>
        <li>Graphic Designer</li>
        <li>Product Designer</li>

        </ul>
        `;
    }

    else if(value === "ai"){

        output =

        `
        <h3>Recommended Careers</h3>

        <ul>

        <li>AI Engineer</li>
        <li>Prompt Engineer</li>
        <li>ML Engineer</li>

        </ul>
        `;
    }

    else if(value === "cloud"){

        output =

        `
        <h3>Recommended Careers</h3>

        <ul>

        <li>Cloud Engineer</li>
        <li>DevOps Engineer</li>
        <li>AWS Architect</li>

        </ul>
        `;
    }

    suggestionBox.innerHTML =
    output;
}



// =========================
// CONTACT FORM
// =========================

function sendMessage(){

    const name =
    document.getElementById("name");

    const email =
    document.getElementById("email");

    const subject =
    document.getElementById("subject");

    const message =
    document.getElementById("message");

    const successBox =
    document.getElementById("successBox");

    if(
        !name ||
        !email ||
        !subject ||
        !message
    ){
        return;
    }

    if(
        name.value.trim() === "" ||
        email.value.trim() === "" ||
        subject.value.trim() === "" ||
        message.value.trim() === ""
    ){

        alert(
        "Please fill all fields."
        );

        return;
    }

    if(
        message.value.trim().length < 10
    ){

        alert(
        "Message should contain minimum 10 characters."
        );

        return;
    }

    if(successBox){

        successBox.style.display =
        "block";
    }

    name.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
}



// =========================
// RESUME BUILDER
// =========================

function generateResume(){

    const name =
    document.getElementById("name").value;

    const role =
    document.getElementById("role").value;

    const email =
    document.getElementById("email").value;

    const phone =
    document.getElementById("phone").value;

    const location =
    document.getElementById("location").value;

    const about =
    document.getElementById("about").value;

    const education =
    document.getElementById("education").value;

    const experience =
    document.getElementById("experience").value;

    const projects =
    document.getElementById("projects").value;

    const skills =
    document.getElementById("skills").value;

    if(
        name === "" ||
        role === "" ||
        email === ""
    ){

        alert(
        "Please fill required fields."
        );

        return;
    }

    document.getElementById("previewName")
    .innerText = name;

    document.getElementById("previewRole")
    .innerText = role;

    document.getElementById("previewEmail")
    .innerText =
    `${email} | ${phone}`;

    document.getElementById("previewLocation")
    .innerText = location;

    document.getElementById("previewAbout")
    .innerText = about;

    document.getElementById("previewEducation")
    .innerText = education;

    document.getElementById("previewExperience")
    .innerText =
    experience || "Fresher";

    document.getElementById("previewProjects")
    .innerText = projects;

    document.getElementById("previewSkills")
    .innerText = skills;

    const file =
    document.getElementById("imageUpload")
    .files[0];

    if(file){

        const reader =
        new FileReader();

        reader.onload = function(e){

            document.getElementById("previewImage")
            .src = e.target.result;
        };

        reader.readAsDataURL(file);
    }

    alert(
    "Resume Generated Successfully!"
    );
}



// =========================
// CHARACTER COUNTER
// =========================

const aboutField =
document.getElementById("about");

if(aboutField){

    aboutField.addEventListener(
    "input",

    function(){

        const counter =
        document.getElementById("charCount");

        if(counter){

            counter.innerText =
            `${this.value.length} / 300`;
        }
    });
}



// =========================
// DOWNLOAD PDF
// =========================

function downloadPDF(){

    const resume =
    document.getElementById("resumePreview");

    if(!resume){

        return;
    }

    const options = {

        margin:0,

        filename:
        "Professional_Resume.pdf",

        image:{
            type:"jpeg",
            quality:1
        },

        html2canvas:{
            scale:2
        },

        jsPDF:{
            unit:"px",
            format:[850,1100],
            orientation:"portrait"
        }
    };

    html2pdf()
    .set(options)
    .from(resume)
    .save();
}
