const formData = {
    email: "",
    message: ""
};

const form = document.querySelector(".feedback-form");

form.addEventListener("input", handleInput);

form.addEventListener("submit", handleSubmit);


populateForm();

function handleInput(event) {

    formData[event.target.name] = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

function populateForm() {

    const savedData = JSON.parse(localStorage.getItem("feedback-form-state"));
    if (savedData) {
        form.email.value = savedData.email || "";
        form.message.value = savedData.message || "";
        formData.email = savedData.email || "";
        formData.message = savedData.message || "";
    }
}

function handleSubmit(event) {
    event.preventDefault();
  
    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return; 
    }
   
    console.log(formData);
    localStorage.removeItem("feedback-form-state");
    formData.email = "";
    formData.message = "";
    event.currentTarget.reset();
}