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

  const body = await readBody<{
    header: string;
    paragraph: string;
    image_url: number;
    image_name: string;
  }>(event);

  const { error } = await supabase
    .from("custom_content")
    .update({
      header: body.header,
      paragraph: body.paragraph,
      image_url: body.image_url,
      image_name: body.image_name,
    })
    .eq("id", index);

  if (error) {
    throw createError({ statusCode: 500, statusMessage: error.message });
  }

  return { success: true, id: index };
});
