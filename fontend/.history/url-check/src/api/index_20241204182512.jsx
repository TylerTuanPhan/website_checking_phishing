import axios from "axios";

export const checkURLApi = async (url) => {
  try {
    const res = await axios.post("http://127.0.0.1:5000/predict", { url });

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
