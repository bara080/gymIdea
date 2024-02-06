//  import all needed exports from 

import "@fortawesome/fontawesome-free/css/all.css";
import Modal from "./components/Modal";
import IdeaForm from "./components/IdeaForm";
import IdeaList from "./components/IdeaList";
import "./css/styles.css";


//  create an instance of IdeaForm
const ideaForm = new IdeaForm();

//  call render function
ideaForm.render();

//  create and instance of IdeaList
const idealist = new IdeaList();

//  call render function
// idealist.render();

//  create an instance of the modal
const modal = new Modal();

//  test function for console
console.log("hello Ahmad");