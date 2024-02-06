import axios from "axios";

class IdeasApi {
  constructor() {
    this._apiUrl = "http://localhost:8000/api/ideas";
  }

  async getIdeas() {
    try {
        console.log("Fetching ideas...");
        return await axios.get(this._apiUrl);
    } catch (error) {
        console.log("Error fetching ideas:", error);
    }
}

async createIdea(idea){
  return  axios.post(this._apiUrl, idea);
}

updateIdea (id, data){
  return axios.put(`${this._apiUrl} / ${id}` , data);
}

deleteIdea (id)
{
  const username =- localStorage.getItem("username") ?
  localStorage.getItem("username") : "";

  return axios.put(`${this._apiUrl} / ${id}` , {

    data : {
      username,
    }
  });
}
}

export default new IdeasApi();
