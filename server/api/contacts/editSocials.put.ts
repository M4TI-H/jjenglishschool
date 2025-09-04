import { serverSupabaseClient, serverSupabaseUser } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient(event);
  const user = await serverSupabaseUser(event);

  if (!user) {
    throw createError({ statusCode: 401, statusMessage: "User unauthorized" });
  }

  const body = await readBody<
    {
      id: number;
      platform: string;
      username: string;
      link: string;
    }[]
  >(event);

  for (const social of body) {
    const { error } = await supabase
      .from("social_media")
      .update({
        username: social.username,
        link: social.link,
      })
      .eq("platform", social.platform);

    if (error) {
      throw createError({ statusCode: 500, statusMessage: error.message });
    }
  }

  return { success: true };
});
