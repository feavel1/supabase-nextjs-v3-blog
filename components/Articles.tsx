import type { NextPage } from "next";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import ArticleCard from "./ui/ArticleCard";

export default function Articles() {
  const supabaseClient = useSupabaseClient();
  const user = useUser();
  const router = useRouter();
  const [articles, setArticles] = useState<string[]>([]);

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
    <>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </>
  );
}
