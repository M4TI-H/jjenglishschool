import { serverSupabaseClient, serverSupabaseUser } from "#supabase/server";
import type Lesson from "~/types/lesson";

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient(event);
  const user = await serverSupabaseUser(event);

  if (!user) {
    throw createError({ statusCode: 401, statusMessage: "User unauthorized" });
  }

  const { data, error } = await supabase
    .from("lessons")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    throw createError({ statusCode: 500, statusMessage: error.message });
  }

  return data as Lesson[];
});
