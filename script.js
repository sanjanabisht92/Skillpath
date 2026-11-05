
// Learning recommendations for each skill
const learningGuide = {
    HTML: "Learn HTML tags, headings, forms and webpage structure.",
    CSS: "Learn colours, layouts, Flexbox and responsive design.",
    JavaScript: "Learn variables, functions, arrays and DOM manipulation.",
    React: "Learn components, props, state and React hooks.",
    Git: "Learn repositories, commits, branches and GitHub.",
    Python: "Learn variables, loops, functions and data structures.",
    SQL: "Learn SELECT, WHERE, JOIN and database queries.",
    Excel: "Learn formulas, sorting, filtering and pivot tables.",
    Pandas: "Learn DataFrames, data cleaning and data analysis.",
    OOP: "Learn classes, objects, inheritance and polymorphism."
};

// Skills required for each internship role
const jobRoles = {
    web: {
        name: "Web Developer Intern",
        skills: ["HTML", "CSS", "JavaScript", "React", "Git"]
    },

    data: {
        name: "Data Analyst Intern",
        skills: ["Python", "SQL", "Excel", "Pandas"]
    },

    python: {
        name: "Python Developer Intern",
        skills: ["Python", "OOP", "SQL", "Git"]
    }
};

// Get the button
const checkButton = document.getElementById("checkButton");

// Run this function when the button is clicked
checkButton.addEventListener("click", function () {

    // Get selected career role
    const selectedRole = document.getElementById("role").value;

    // Get required skills for that role
    const requiredSkills = jobRoles[selectedRole].skills;

    // Get all selected checkboxes
    const checkboxes = document.querySelectorAll(
        '.skills input[type="checkbox"]:checked'
    );

    // Store selected skills
    const userSkills = Array.from(checkboxes).map(
        checkbox => checkbox.value
    );
    if (userSkills.length === 0) {
        result.innerHTML = `
            <h2>No skills selected!</h2>
            <p>Please select at least one skill
            before checking your readiness.</p>
        `;
        return;
    }

    // Find matching skills
    const matchedSkills = requiredSkills.filter(
        skill => userSkills.includes(skill)
    );

    // Find missing skills
    const missingSkills = requiredSkills.filter(
        skill => !userSkills.includes(skill)
    );

    // Calculate percentage
    const percentage = Math.round(
        (matchedSkills.length / requiredSkills.length) * 100
    );

    // Display results
    const result = document.getElementById("result");

    result.innerHTML = `
        <h2>Your Internship Readiness Report</h2>

        <h3>${jobRoles[selectedRole].name}</h3>

        <h1>${percentage}% Match</h1>

            <div class="progress-container">
            <div class="progress-bar"
            style="width: ${percentage}%">
            </div>
            </div>

        <p>
            You have ${matchedSkills.length} out of
            ${requiredSkills.length} required skills.
        </p>

        <h3>Skills You Already Have</h3>

        <ul>
            ${matchedSkills.length
                ? matchedSkills.map(skill => `<li>✅ ${skill}</li>`).join("")
                : "<li>No matching skills yet.</li>"
            }
        </ul>

        <h3>Skills You Need to Learn</h3>

        <ul>
            ${missingSkills.length
                ? missingSkills.map(skill => `<li>📚 ${skill}</li>`).join("")
                : "<li>You've covered all the listed skills!</li>"
            }
        </ul>

        <h3>Your Learning Roadmap</h3>

        <ol>
        ${missingSkills.length
            ? missingSkills.map(skill => `
                <li>
                    <strong>${skill}</strong>
                    <p>${learningGuide[skill]}</p>
                </li>
            `).join("")
            : "<li>Great job! You have all the listed skills. Start building projects to strengthen them.</li>"
        }
        </ol>
    `;
});
