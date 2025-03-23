import axios from "axios";

export const checkURLApi = async (url) => {
  try {
    const res = await axios.post("http://127.0.0.1:5000/predict", { url });

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const checkEmailApi = async (email_text) => {
  try {
    const res = await axios.post("http://127.0.0.1:5000/scan-email", { email_text });

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
