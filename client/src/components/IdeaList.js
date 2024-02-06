import IdeasApi from "../services/ideasApi";

class IdeaList {
    constructor() {
        this._ideaListEl = document.querySelector("#idea-list");
        this._ideas = [];
        this.getIdeas();
        this._validTags = new Set();
        this._validTags.add("legs");
        this._validTags.add("back");
        this._validTags.add("shoulders");
        this._validTags.add("biceps");
        this._validTags.add("triceps");
        this._validTags.add("others");
    }

    addEventListeners() {
        this._ideaListEl.addEventListener("click", (e) => {
            if(e.target.classList.contains("fa-times")){
                e.stopImmediatePropagation();
                const ideaId = e.target.parentElement.parentElement.dataset.id;
                this.deleteIdea( ideaId);
            }
        })
    }

    async getIdeas() {
        try {
            const res = await IdeasApi.getIdeas();
            this._ideas = res.data.data;
            this.render();
            console.log(this._ideas);
        } catch (error) {
            console.log(error);
        }
    }

    async deleteIdea(ideaId){
        try {
            const res = await IdeasApi.deleteIdea(ideaId);
            this._ideas.filter((idea) => idea._id !== ideaId);
            await this.render();
        }catch{
            alert("you cannot delete this post");
        }
    }


    async addIdeaToList(idea){
        this._ideas.push(idea);
       await this.render();
    }

    getTagClass(tag) {
        tag = tag ? tag.toLowerCase() : "";
        let tagClass = "";
        if (this._validTags.has(tag)) {
            tagClass = `tag-${tag}`;
        } else {
            tagClass = "";
        }
        return tagClass;
    }
    render() {
        if (!Array.isArray(this._ideas) || this._ideas.length === 0) {
            // Handle the case when _ideas is undefined or empty
            this._ideaListEl.innerHTML = "No ideas available.";
            return;
        }
    
        this._ideaListEl.innerHTML = this._ideas
            .map((idea) => {
                const tagClass = this.getTagClass(idea.tag);
                const deleteBtn = idea.username === localStorage.getItem("username")
                    ? `<button class="delete"><i class="fas fa-times"></i></button>` : "";
    
                return `
                    <div class="card" data-id="${idea._id}">
                        ${deleteBtn}
                        <h3>${idea.text}</h3>
                        ${
                            idea.tag
                                ? `<p class="tag ${tagClass}">${(idea.tag).toUpperCase()}</p>`
                                : ''
                        }
                        <p>
                            Posted on <span class="date">${idea.date}</span> by
                            <span class="author">${idea.username}</span>
                        </p>
                    </div>
                `;
            })
            .join("");
            
        this.addEventListeners();
    }
    


}


//  export class
export default IdeaList;
