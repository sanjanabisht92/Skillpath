
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

        
<h3>Your Personalized Learning Roadmap</h3>

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
```

Save your file.

## 15.3 Test your new feature

Open Chrome and refresh your application.

Try this example:

<box border radius="lg" padding={3} gap={3}>
  **Example: Web Developer Intern**
  <row align="center" justify="between">
    <text color="secondary" size="sm">Skill match</text>
    <title color="success" size="xl">40%</title>
  </row>
  <box background="surface-tertiary" radius="full" height="10px" clip>
    <box background="#16A34A" width="40%" height="10px" radius="full"/>
  </box>
  **Skills to learn**
  <box background="surface-secondary" radius="md" padding={2} gap={1}>
    **1. JavaScript**

    Learn variables, functions, arrays and DOM manipulation.
  </box>
  <box background="surface-secondary" radius="md" padding={2} gap={1}>
    **2. React**

    Learn components, props, state and React hooks.
  </box>
  <box background="surface-secondary" radius="md" padding={2} gap={1}>
    **3. Git**

    Learn repositories, commits, branches and GitHub.
  </box>
</box>

The actual recommendations should now appear automatically based on the skills the student is missing.

---

# Step 16: Make your application look more professional

Let's add a small branding touch.

Change the main heading in `index.html`:

```html
<h1>Internship Skill Checker</h1>
```

To:

```html
<h1>SkillPath</h1>
<p>Your Roadmap to Internship Readiness</p>
```

Your project will now have its own product identity: **SkillPath**.

You can keep the folder name `Internship-Skill-Checker`.

## Step 17: What remains before adding it to your CV?

<box border radius="lg" padding={3} gap={3}>
  **SkillPath — Project checklist**
  <badge color="success">Core application working</badge>
  <checkbox checked disabled lineThrough={false}>HTML structure</checkbox>
  <checkbox checked disabled lineThrough={false}>CSS styling</checkbox>
  <checkbox checked disabled lineThrough={false}>Three career role options</checkbox>
  <checkbox checked disabled lineThrough={false}>Skill-match calculation</checkbox>
  <checkbox checked disabled lineThrough={false}>Missing skill identification</checkbox>
  <checkbox lineThrough={false}>Personalized learning recommendations tested</checkbox>
  <checkbox lineThrough={false}>Final interface improvements</checkbox>
  <checkbox lineThrough={false}>GitHub repository</checkbox>
  <checkbox lineThrough={false}>Live website link</checkbox>
</box>

## Your next checkpoint

{@body const [learning,setLearning] = DIL.useState("not_tested")}
{@body const [branding,setBranding] = DIL.useState("not_done")}
<box border radius="lg" padding={3} gap={3}>
  **1. Are learning recommendations appearing?**
  <radio-group direction="col" value={learning} onChange={setLearning}>
    <radio value="working">Yes, they are appearing correctly.</radio>
    <radio value="not_working">No, something went wrong.</radio>
    <radio value="not_tested">I haven't tested yet.</radio>
  </radio-group>
  **2. Have you changed the name to SkillPath?**
  <radio-group direction="col" value={branding} onChange={setBranding}>
    <radio value="done">Yes.</radio>
    <radio value="not_done">Not yet.</radio>
  </radio-group>
  <button block onClick={()=>GenUI.issueNewTurn("Learning recommendations: "+learning+". SkillPath branding: "+branding+". Guide me to the next step.")}>Submit progress</button>
</box>


        
    ;
});
