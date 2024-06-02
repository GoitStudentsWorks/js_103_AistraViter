import axios from 'axios';

axios.defaults.baseURL = "https://portfolio-js.b.goit.study/api";


export async function fetchRequest () {
  const {data} = await axios.get("/requests", {

    params: {
      "email": "test@gmail.com",
      "comment": "User's comment"
    }
  });
  return data;
}



