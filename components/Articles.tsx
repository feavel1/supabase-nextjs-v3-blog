import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useState, useEffect } from "react";
import ArticleCard from "./ui/ArticleCard";

interface article {
  id: number;
  title: string;
  user_email: string;
}

export default function Articles() {
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
        .limit(10);
      if (error) throw error;
      if (data != null) {
        setArticles(data);
      }
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="grid md:grid-cols-3 gap-2 w-full">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}
