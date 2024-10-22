function display(): void {
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const phoneInput = document.getElementById('phone') as HTMLInputElement;
    const educationInput = document.getElementById('education') as HTMLInputElement;
    const experienceInput = document.getElementById('experience') as HTMLInputElement;
    const skillsInput = document.getElementById('skills') as HTMLInputElement;
    const photoInput = document.getElementById('photo') as HTMLInputElement;

    const resumeDisplay = document.getElementById('resumeDisplay') as HTMLElement;
    const photoDisplay = document.getElementById('photoDisplay') as HTMLElement;

    const formSection = document.getElementById('form-section') as HTMLElement;
    const resumeSection = document.getElementById('resume-section') as HTMLElement;

    formSection.style.display = 'none';
    resumeSection.style.display = 'block';

    resumeDisplay.innerHTML = `
        <div class="resume">
            <h2 style="color: red; font-size: 60px  ;">Resume</h2>
        <h3 style="color: rgb(0, 123, 255);">Personal Information</h3>
        <p><strong>Name:</strong> ${nameInput.value}</p>
        <p><strong>Email:</strong> ${emailInput.value}</p>
        <p><strong>Phone No.:</strong> ${phoneInput.value}</p>
        
        <h3 style="color: rgb(0, 123, 255);">Education</h3>
        <p>${educationInput.value}</p>
        
        <h3 style="color: rgb(0, 123, 255);">Experience</h3>
        <p>${experienceInput.value}</p>
        
        <h3 style="color: rgb(0, 123, 255);">Skills</h3>
        <p>${skillsInput.value}</p>;
        </div>
    `;

    if (photoInput.files && photoInput.files.length > 0) {
        const file = photoInput.files[0];
        const reader = new FileReader();
        reader.onload = function (e) {
            if (e.target?.result) {
                photoDisplay.innerHTML = `<img src="${e.target.result}" alt="Uploaded Photo" style="width: 150px; height: 150px; border-radius: 50%; border: 4px solid #4a90e2; object-fit: cover; margin-bottom: 20px;">`;
            }
        };
        reader.readAsDataURL(file);
    } else {
        photoDisplay.innerHTML = "<p>No photo uploaded</p>";
    }
}

function edit(): void {
    const formSection = document.getElementById('form-section') as HTMLElement;
    const resumeSection = document.getElementById('resume-section') as HTMLElement;

    resumeSection.style.display = 'none';
    formSection.style.display = 'block';
}

const submitButton = document.getElementById('submitButton') as HTMLButtonElement;
submitButton.addEventListener('click', display);

const editButton = document.getElementById('editButton') as HTMLButtonElement;
editButton.addEventListener('click', edit);
