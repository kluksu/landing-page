import emailjs from "emailjs-com";

export const sendEmailToMe = (
  name,
  email,
  phone,
  message,
  subject,
  template,
  captchaResponse,
  buyerName,
  orderLInk,
  sellerEmail
) => {
  // template_1iam9bt

  // template_bnhobxj
  let templateParams = {
    name: name,
    subject: subject,
    email: email,
    phone: phone,
    message: message,
    buyerName: buyerName,
    orderLInk: orderLInk,
    sellerEmail: sellerEmail,
    "g-recaptcha-response": captchaResponse,
  };

  return emailjs.send(
    "default_service",
    template,
    templateParams,
    "user_luCcUIntINSgugJfQeWCK"
  );
};
export const mokeUp = [
  {
    free: {
      valueFeatures: {
        users: 1,
        clients: 5,

        hourse: 10,
      },
      features: [
        "free customer service",
        "unlimited items",
        "unlimited users",
        "online chat service",
      ],
    },
    price: "0$",
  },
  {
    basic: {
      valueFeatures: {
        users: 2,
        clients: 10,

        hourse: 100,
      },
      features: ["unlimited items", "unlimited users", "online chat service"],
    },
    price: "20$",
  },
  {
    standart: {
      valueFeatures: {
        users: 3,
        clients: 100,

        hourse: 1000,
      },
      features: ["unlimited users", "online chat service"],
    },
    price: "500$",
  },
  {
    primium: {
      valueFeatures: {
        users: 4,
        clients: "unlimited",

        hourse: "unlimited",
      },
      features: ["online chat service"],
    },
    price: "1000$",
  },
];
export let shake = "animate__animated animate__headShake	 animate__slow";
