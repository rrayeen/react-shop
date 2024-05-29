import supabase from "./supabase";

export async function getAllProducts() {
  let { data: product, error } = await supabase.from("product").select("*");

  if (error) throw new Error(`something went wrong ${error}`);

  return product;
}
export async function getProduct(id) {
  let { data: product, error } = await supabase
    .from("product")
    .select("*")
    .eq("id", id);
  if (error) throw new Error(error.message);

  return product[0];
}
// export async function updateComments({ newComments, id }) {
//   const { data, error } = await supabase
//     .from("product")
//     .update({ comments: { comments: newComments } })
//     .eq("id", id)
//     .select();

//   if (error) throw new Error(error.message);
//   return data;
// }

export async function getComments(id) {
  let { data, error } = await supabase
    .from("commentsTab")
    .select("*")
    // Filters
    .eq("productId", id);
  if (error) throw new Error(error.message);
  return data;
}
export async function deleteComment(id) {
  const { error } = await supabase.from("commentsTab").delete().eq("id", id);

  if (error) throw new Error(error.message);
}

export async function addComment(newComment) {
  const { data, error } = await supabase
    .from("commentsTab")
    .insert([newComment])
    .select()
    .single();

  if (error) throw new Error();

  return data;
}

export async function addRecipe(recipe) {
  const { data, error } = await supabase
    .from("recipe")
    .insert([recipe])
    .select();

  if (error) throw new Error(error.message);
  return data;
}

export async function getAllRecipes(id) {
  let { data: recipe, error } = await supabase
    .from("recipe")
    .select("*")
    .eq("id", id);
  if (error) throw new Error(error.message);
  return recipe;
}
export async function getAllUserId() {
  let { data: Users, error } = await supabase.from("Users").select("id");
  if (error) throw new Error(error.message);
  return Users;
}

export async function getHistory(id) {
  if (!id) return;
  let { data: recipe, error } = await supabase
    .from("recipe")
    .select("*")
    // Filters
    .eq("userId", id);
  if (error) throw new Error(error.message);
  return recipe;
}

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}
export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error) throw new Error(error.message);
  let { data: Users, error1 } = await supabase
    .from("Users")
    .select("*")
    // Filters
    .eq("id", user.id);
  if (error) throw new Error(error.message);
  if (error1) throw new Error(error1.message);
  return { user, Users };
}

export async function logout() {
  let { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function singup({ email, password }) {
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw new Error(error.message);
  return data;
}

export async function newUser(user) {
  const { data, error } = await supabase
    .from("Users")
    .insert([user])
    .select()
    .single();
  if (error) throw new Error(error.message);

  return data;
}
export async function updateProduct({ id, quantity }) {
  const { data, error } = await supabase
    .from("product")
    .update({ quantity: quantity })
    .eq("id", id)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}
