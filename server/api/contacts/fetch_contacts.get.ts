import { serverSupabaseClient } from "#supabase/server";
import type { ContactData } from "~/types/contact";

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient(event);

  const { data, error } = await supabase.from("contact").select("*");

  if (error) {
    throw createError({ statusCode: 500, statusMessage: error.message });
  }

  if (!data || data.length === 0) {
    return { success: true, data: null };
  }

  return { success: true, data: data[0] as ContactData };
});
