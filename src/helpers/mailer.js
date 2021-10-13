import emailjs from "emailjs-com";

const sendEmail = async (e) => {
  e.preventDefault();
  const service_id = "service_0s9ifjn"; // 1st param
  const template_id = "template_bbca0ns"; // 2nd param
  const user_id = "user_nC9AZY0jzcM3ENY164iuV"; // 4th param

  try {
    let res = await emailjs.sendForm(service_id, template_id, e.target, user_id);
    return res;
  } catch (error) {
    return error;
  }
};

export default sendEmail;
