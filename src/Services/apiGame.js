import axios from "axios";

export async function loadMatches() {
  try {
    const res = await axios.get("http://localhost:3000/api/matches");
    const matches = res.data.matches;

    return matches
    // console.log(res.data.matches);
  } catch (error) {
    console.log(error);
  }
}
