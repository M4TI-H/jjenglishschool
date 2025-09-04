import { serverSupabaseClient, serverSupabaseUser } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient(event);
  const user = await serverSupabaseUser(event);

  if (!user) {
    throw createError({ statusCode: 401, statusMessage: "User unauthorized" });
  }

  const body = await readBody<{
    name: string;
    description: string;
    price: number;
    duration: string;
    isActive: boolean;
  }>(event);

  const { data, error } = await supabase
    .from("lessons")
    .insert({
      name: body.name,
      description: body.description,
      price: body.price,
      duration: body.duration,
      isActive: body.isActive,
    })
    .select();

  if (error) {
    throw createError({ statusCode: 500, statusMessage: error.message });
  }

  return { lesson: data[0] };
});
