import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient(event);

  const { data, error } = await supabase.from("contact").select("*");

  if (error) {
    throw createError({ statusCode: 500, statusMessage: error.message });
  }

  return data?.[0] ?? null;
});
