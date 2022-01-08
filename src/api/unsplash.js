import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 98Qn5CRR1Dxa53elFu7cnp3K_-4-P-lyd1hyrSKNB9I",
  },
});
