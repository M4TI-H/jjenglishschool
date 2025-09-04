import { serverSupabaseClient } from "#supabase/server";
import type Lesson from "~/types/lesson";

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient(event);

  const { data, error } = await supabase.from("lessons").select("*");

  if (error) {
    throw createError({ statusCode: 500, statusMessage: error.message });
  }

  return data as Lesson[];
});
