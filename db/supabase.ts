import { createClient } from "@supabase/supabase-js";

// connect supabase
async function GetSupabase() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

    if (!supabaseUrl || !supabaseKey) {
        throw new Error("Missing Supabase environment variables");
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    return supabase;
}

export default async function GetItems() {
    const supabase = await GetSupabase();

    try {
        const { data } = await supabase.from("items").select();
        return data;
    } catch (error) {
        console.error("Error fetching items:", error);
        throw error; // Re-throw the error for handling elsewhere
    }
}

// add card to supabase items
export async function AddItemToDB(
    title: string,
    description: string,
    image_url: string
) {
    const supabase = await GetSupabase();
    console.log(title)

    try {
        const { data, error } = await supabase
            .from("items")
            .insert({ title, description, image_url });
    } catch (error) {
        console.error("Error adding item:", error);
        throw error; // Re-throw the error for handling elsewhere
    }
}
