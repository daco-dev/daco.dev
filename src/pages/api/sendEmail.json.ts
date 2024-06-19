// import type { APIRoute } from "astro";
// import { EmailTemplate } from "@/emails/EmailTemplate";

// import { Resend } from "resend";

// const resend = new Resend(import.meta.env.RESEND_API_KEY);

// export const POST: APIRoute = async ({ params, request }) => {
//   const { name, email, message } = await request.json();

//   try {
//     const sendData = await resend.emails.send({
//       from: "Acme <onboarding@resend.dev>",
//       to: "ldanielcolmenaresm@gmail.com",
//       subject: "daco.dev",
//       react: EmailTemplate({ name, email, message }),
//       text: "hola",
//     });

//     return new Response({ sendsendDatData })
//   } catch (error) {
//     return new Response();
//   }
// };
