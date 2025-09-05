import { serverSupabaseClient, serverSupabaseUser } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient(event);
  const user = await serverSupabaseUser(event);

  if (!user) {
    throw createError({ statusCode: 401, statusMessage: "User unauthorized" });
  }

  const body = await readBody<{
    header: string;
    paragraph: string;
    image_url: number;
    image_name: string;
  }>(event);

  const { data, error } = await supabase
    .from("custom_content")
    .insert({
      header: body.header,
      paragraph: body.paragraph,
      image_url: body.image_url,
      image_name: body.image_name,
    })
    .select();

  if (error) {
    throw createError({ statusCode: 500, statusMessage: error.message });
  }

  return { element: data[0] };
});
