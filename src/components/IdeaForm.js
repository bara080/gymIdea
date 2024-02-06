// Import IdeasApi at the beginning
import IdeasApi from "../services/ideasApi";

import IdeaList from "./IdeaList";


// Create an IdeaForm class
class IdeaForm {
  // Create a non-args-constructor
  constructor() {
    this._formModal = document.querySelector("#form-modal");
    this._ideaList = new IdeaList();
  }

  // Add event listeners
  addEventListeners() {
    // Add event listener when form's submit btn is clicked
    this._form.addEventListener("submit", this.handleSubmit.bind(this));
  }
// Handle submit function
async handleSubmit(e) {
  e.preventDefault();

  // Validation test
  if (!this._form.elements.text.value || !this._form.elements.tag.value || !this._form.elements.username.value) {
    alert("please enter all fields");
    return;
  }

  // Save user to local storage
  localStorage.setItem("username", this._form.elements.username.value);

  const idea = {
    text: this._form.elements.text.value,
    tag: this._form.elements.tag.value,
    username: this._form.elements.username.value,
  };

  try {
    // Add idea to server
    const newIdea = await IdeasApi.createIdea(idea);
    this._ideaList.addIdeaToList(newIdea.data.data);

    // Check for error
    console.log("New Idea created:", newIdea);
  } catch (error) {
    console.error("Error creating idea:", error.message);
  }

  // Clear all fields
  this._form.elements.text.value = "";
  this._form.elements.tag.value = "";
  this._form.elements.username.value = "";

  // Call render after updating local storage
  this.render();

  document.dispatchEvent(new Event("closemodal"));
}


  // Render into the HTML body
  render() {
    // Form will be rendered
    this._formModal.innerHTML = `
      <form id="idea-form">
        <div class="form-control">
          <label for="idea-text">Enter a Username</label>
          <input type="text" name="username" id="username" 
          value="${localStorage.getItem("username") ?
          localStorage.getItem("username"): ""}" />
        </div>
        <div class="form-control">
          <label for="idea-text">What's Your Idea?</label>
          <textarea name="text" id="idea-text"></textarea>
        </div>
        <div class="form-control">
          <label for="tag">Tag</label>
          <input type="text" name="tag" id="tag" />
        </div>
        <button class="btn" type="submit" id="submit">Submit</button>
      </form>
    `;

    // This will fire-up after render
    this._form = document.querySelector("#idea-form");
    this.addEventListeners();
  }
}

export default IdeaForm;
