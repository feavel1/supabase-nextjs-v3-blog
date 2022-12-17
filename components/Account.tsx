import { useState, useEffect } from "react";
import {
  useUser,
  useSupabaseClient,
  useSession,
} from "@supabase/auth-helpers-react";
import { Database } from "../utils/database.types";
import Link from "next/link";
type Profiles = Database["public"]["Tables"]["profiles"]["Row"];

export default function Account() {
  const supabase = useSupabaseClient<Database>();
  const user = useUser();
  const session = useSession();

  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState<Profiles["username"]>(null);
  const [website, setWebsite] = useState<Profiles["website"]>(null);
  const [avatar_url, setAvatarUrl] = useState<Profiles["avatar_url"]>(null);

  useEffect(() => {
    getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);
      if (!user) throw new Error("No user");

      let { data, error, status } = await supabase
        .from("profiles")
        .select(`username, website, avatar_url`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setWebsite(data.website);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      alert("Error loading user data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({
    username,
    website,
    avatar_url,
  }: {
    username: Profiles["username"];
    website: Profiles["website"];
    avatar_url: Profiles["avatar_url"];
  }) {
    try {
      setLoading(true);
      if (!user) throw new Error("No user");

      const updates = {
        id: user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
      };

      let { error } = await supabase.from("profiles").upsert(updates);
      if (error) throw error;
      alert("Profile updated!");
    } catch (error) {
      alert("Error updating the data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card card--secondary grid gap-2 mt-4">
      <h1 className="text-3xl font-bold">我的个人信息</h1>
      <div className="form-widget">
        {/* Add to the body */}
        {/* <Avatar
          uid={user.id}
          url={avatar_url}
          size={150}
          onUpload={(url) => {
            setAvatarUrl(url);
            updateProfile({ username, website, avatar_url: url });
          }}
        /> */}
        {/* ... */}
      </div>
      <div>
        <label htmlFor="email">邮箱地址</label>
        <input
          id="email"
          type="text"
          value={session?.user.email}
          disabled
          className="input bg-gray-300"
        />
      </div>
      <div>
        <label htmlFor="username">用户名</label>
        <input
          id="username"
          type="string"
          className="input"
          value={username || ""}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="website">用户网址</label>
        <input
          id="website"
          type="website"
          value={website || ""}
          onChange={(e) => setWebsite(e.target.value)}
          className="input"
        />
      </div>

      <div>
        <Link href="/">
          <button className="btn--primary btn">返回主页</button>
        </Link>
      </div>

      <div>
        <button
          className="btn--secondary btn"
          onClick={() => updateProfile({ username, website, avatar_url })}
          disabled={loading}
        >
          {loading ? "加载中 ..." : "保存信息"}
        </button>
      </div>

      <div>
        <Link href="/createPost">
          <button className="btn--primary btn">创建帖子</button>
        </Link>
      </div>

      <div>
        <button
          className="btn--third btn"
          onClick={() => supabase.auth.signOut()}
        >
          退出登录
        </button>
      </div>
    </div>
  );
}
