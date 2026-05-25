function toggleRoadmap(id){

    const roadmap =
    document.getElementById(id);

    if(
        roadmap.style.display === "block"
    ){

        roadmap.style.display = "none";
    }

    else{

        roadmap.style.display = "block";
    }
}


// AI CAREER

function getCareerSuggestion(){

    const interest =
    document.getElementById("interest").value;

    const suggestion =
    document.getElementById("suggestionBox");

    if(interest === ""){

        suggestion.innerHTML =
        "Please select your interest.";

        return;
    }

    if(interest === "coding"){

        suggestion.innerHTML =

        `
        <h2>Recommended Careers</h2>

        <ul>

        <li>Frontend Developer</li>

        <li>Backend Developer</li>

        <li>Full Stack Developer</li>

        <li>Software Engineer</li>

        </ul>
        `;
    }

    else if(interest === "security"){

        suggestion.innerHTML =

        `
        <h2>Recommended Careers</h2>

        <ul>

        <li>Cybersecurity Analyst</li>

        <li>Ethical Hacker</li>

        <li>Security Engineer</li>

        </ul>
        `;
    }

    else if(interest === "data"){

        suggestion.innerHTML =

        `
        <h2>Recommended Careers</h2>

        <ul>

        <li>Data Analyst</li>

        <li>Data Scientist</li>

        <li>ML Engineer</li>

        </ul>
        `;
    }

    else if(interest === "design"){

        suggestion.innerHTML =

        `
        <h2>Recommended Careers</h2>

        <ul>

        <li>UI/UX Designer</li>

        <li>Product Designer</li>

        <li>Graphic Designer</li>

        </ul>
        `;
    }

    else if(interest === "ai"){

        suggestion.innerHTML =

        `
        <h2>Recommended Careers</h2>

        <ul>

        <li>AI Engineer</li>

        <li>ML Engineer</li>

        <li>Prompt Engineer</li>

        </ul>
        `;
    }

    else if(interest === "cloud"){

        suggestion.innerHTML =

        `
        <h2>Recommended Careers</h2>

        <ul>

        <li>Cloud Engineer</li>

        <li>DevOps Engineer</li>

        <li>AWS Architect</li>

        </ul>
        `;
    }
}