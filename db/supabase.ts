import { ItemType } from "@/type/item";
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
    image_url?: string,
    tags?: string[]
) {
    const supabase = await GetSupabase();

    try {
        const { data, error } = await supabase
            .from("items")
            .insert({ title, description, image_url, tags });
    } catch (error) {
        console.error("Error adding item:", error);
        throw error; // Re-throw the error for handling elsewhere
    }
}

// search db for item based on title
export async function SearchByTitle(text: string) {
    const supabase = await GetSupabase();
    const { data } = await supabase
        .from("items")
        .select("*")
        .filter("title", "ilike", `%${text}%`);

    return data;
}

// search db by tag
export async function SearchByTag(text: string) {
    const supabase = await GetSupabase();
    const { data } = await supabase
        .from("items")
        .select("*")
        .contains("tags", [text]);

    return data;
}

// add upvote to item
export async function addUpvote(item: ItemType): Promise<void> {
    const supabase = await GetSupabase();

    try {
        const { data, error } = await supabase.rpc("increment_up_votes", {
            item_id: item?.id,
        });
        if (error) {
            throw error;
        }
    } catch (error) {
        console.error("Error adding upvote to item:", error);
    }
}
// add downvote to item
export async function addDownvote(item: ItemType): Promise<void> {
    const supabase = await GetSupabase();

    try {
        const { data, error } = await supabase.rpc("increment_down_votes", {
            item_id: item?.id,
        });
        if (error) {
            throw error;
        }
    } catch (e) {
        console.error("Error adding downvote to item:", e);
    }
}
