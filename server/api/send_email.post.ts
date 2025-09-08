import emailjs from "@emailjs/browser";

export default defineEventHandler(async (event) => {
  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

  const body = await readBody<{
    name: string;
    description: string;
    price: number;
    duration: string;
    isActive: boolean;
  }>(event);

  try {
    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID!,
      process.env.EMAILJS_TEMPLATE_ID!,
      body,
      process.env.EMAILJS_PUBLIC_KEY
    );
  } catch (error: any) {
    throw createError({ statusCode: 500, statusMessage: error.message });
  }

  return { success: true };
});
