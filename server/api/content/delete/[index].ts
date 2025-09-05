import { serverSupabaseClient, serverSupabaseUser } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient(event);
  const user = await serverSupabaseUser(event);

  if (!user) {
    throw createError({ statusCode: 401, statusMessage: "User unauthorized" });
  }

  const index = Number(event.context.params!.index);

  if (!index || isNaN(index)) {
    throw createError({ statusCode: 400, statusMessage: "Invalid element ID" });
  }

  const { error } = await supabase
    .from("custom_content")
    .delete()
    .eq("id", index);

  if (error) {
    throw createError({ statusCode: 500, statusMessage: error.message });
  }

  return { success: true, id: index };
});
