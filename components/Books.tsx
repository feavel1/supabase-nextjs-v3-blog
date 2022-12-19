import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useState, useEffect } from "react";
import BookCard from "./ui/BookCard";

interface article {
  id: number;
  title: string;
  user_email: string;
}

export default function Books() {
  const supabaseClient = useSupabaseClient();
  const [articles, setArticles] = useState<article[]>([]);

  useEffect(() => {
    getArticles();
  });

  const getArticles = async () => {
    try {
      const { data, error } = await supabaseClient
        .from("articles")
        .select("*")
        .limit(4);
      if (error) throw error;
      if (data != null) {
        setArticles(data);
      }
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-2 w-full">
      {articles.map((article) => (
        <BookCard key={article.id} article={article} />
      ))}
    </div>
  );
}
