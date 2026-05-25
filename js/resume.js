function generateResume(){

    const name =
    document.getElementById("name").value.trim();

    const role =
    document.getElementById("role").value.trim();

    const email =
    document.getElementById("email").value.trim();

    const phone =
    document.getElementById("phone").value.trim();

    const location =
    document.getElementById("location").value.trim();

    const about =
    document.getElementById("about").value.trim();

    const education =
    document.getElementById("education").value.trim();

    const experience =
    document.getElementById("experience").value.trim();

    const projects =
    document.getElementById("projects").value.trim();

    const skills =
    document.getElementById("skills").value.trim();

    // RESET ERRORS

    document.getElementById("nameError").innerText = "";
    document.getElementById("roleError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("phoneError").innerText = "";
    document.getElementById("locationError").innerText = "";
    document.getElementById("aboutError").innerText = "";
    document.getElementById("educationError").innerText = "";
    document.getElementById("projectsError").innerText = "";
    document.getElementById("skillsError").innerText = "";

    let valid = true;

    // VALIDATION

    if(name === ""){

        document.getElementById("nameError")
        .innerText = "Required";

        valid = false;
    }

    if(role === ""){

        document.getElementById("roleError")
        .innerText = "Required";

        valid = false;
    }

    if(email === ""){

        document.getElementById("emailError")
        .innerText = "Required";

        valid = false;
    }

    if(phone === ""){

        document.getElementById("phoneError")
        .innerText = "Required";

        valid = false;
    }

    if(location === ""){

        document.getElementById("locationError")
        .innerText = "Required";

        valid = false;
    }

    if(about.length < 100){

        document.getElementById("aboutError")
        .innerText =
        "Minimum 100 characters required";

        valid = false;
    }

    if(education === ""){

        document.getElementById("educationError")
        .innerText = "Required";

        valid = false;
    }

    if(projects === ""){

        document.getElementById("projectsError")
        .innerText = "Required";

        valid = false;
    }

    if(skills === ""){

        document.getElementById("skillsError")
        .innerText = "Required";

        valid = false;
    }

    if(!valid){

        return;
    }

    // UPDATE PREVIEW

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

    // SKILLS

    const skillsContainer =
    document.getElementById("previewSkills");

    skillsContainer.innerHTML = "";

    const skillsArray =
    skills.split(",");

    skillsArray.forEach(skill => {

        if(skill.trim() !== ""){

            skillsContainer.innerHTML +=

            `<span class="skill-tag">
            ${skill.trim()}
            </span>`;
        }
    });

    // IMAGE

    const file =
    document.getElementById("imageUpload").files[0];

    if(file){

        const reader =
        new FileReader();

        reader.onload = function(e){

            document.getElementById("previewImage")
            .src = e.target.result;
        }

        reader.readAsDataURL(file);
    }

    alert("Professional Resume Generated!");
}


// CHARACTER COUNTER

document
.getElementById("about")
.addEventListener("input", function(){

    document.getElementById("charCount")
    .innerText =
    `${this.value.length} / 300`;
});


// DOWNLOAD PDF

function downloadPDF(){

    const previewName =
    document.getElementById("previewName").innerText;

    if(previewName === "Your Name"){

        alert(
        "Generate resume before downloading!"
        );

        return;
    }

    const element =
    document.getElementById("resumePreview");

    const options = {

        margin:0,

        filename:'Professional_Resume.pdf',

        image:{
            type:'jpeg',
            quality:1
        },

        html2canvas:{
            scale:2,
            scrollY:0
        },

        jsPDF:{
            unit:'px',
            format:[850,1100],
            orientation:'portrait'
        }
    };

    html2pdf()
    .set(options)
    .from(element)
    .save();
}