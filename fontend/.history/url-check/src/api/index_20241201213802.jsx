import axios from "axios";

export const checkURLApi = () => {
  try {
    const res = axios.post("http://127.0.0.1:5000/predict");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
