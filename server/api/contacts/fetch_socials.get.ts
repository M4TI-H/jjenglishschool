import { serverSupabaseClient } from "#supabase/server";
import type { SocialMedia } from "~/types/contact";

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient(event);

  const { data, error } = await supabase
    .from("social_media")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    throw createError({ statusCode: 500, statusMessage: error.message });
  }

  return data as SocialMedia[];
});
