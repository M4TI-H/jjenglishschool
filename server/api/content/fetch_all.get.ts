import { serverSupabaseClient, serverSupabaseUser } from "#supabase/server";
import type CustomContent from "~/types/customContent";

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient(event);
  const user = await serverSupabaseUser(event);

  if (!user) {
    throw createError({ statusCode: 401, statusMessage: "User unauthorized" });
  }

  const { data, error } = await supabase
    .from("custom_content")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    throw createError({ statusCode: 500, statusMessage: error.message });
  }

  return data as CustomContent[];
});
