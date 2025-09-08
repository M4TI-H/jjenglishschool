import { serverSupabaseClient, serverSupabaseUser } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient(event);
  const user = await serverSupabaseUser(event);

  if (!user) {
    throw createError({ statusCode: 401, statusMessage: "User unauthorized" });
  }

  const body = await readBody<{
    name_surname: string;
    phone_number: string;
    email: string;
  }>(event);

  const { error } = await supabase
    .from("contact")
    .update({
      name_surname: body.name_surname,
      phone_number: body.phone_number,
      email: body.email,
    })
    .eq("id", 1);

  if (error) {
    throw createError({ statusCode: 500, statusMessage: error.message });
  }

  return { success: true };
});
