/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Database } from "../../utils/database.types";
import Image from "next/image";
type Profiles = Database["public"]["Tables"]["profiles"]["Row"];

export default function Avatar({
  uid,
  url,
  size,
  onUpload,
}: {
  uid: string | undefined;
  url: Profiles["avatar_url"];
  size: number;
  onUpload: (url: string) => void;
}) {
  const supabase = useSupabaseClient<Database>();
  const [avatarUrl, setAvatarUrl] = useState<Profiles["avatar_url"]>(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (url) downloadImage(url);
  }, [url]);

  async function downloadImage(path: string) {
    try {
      const { data, error } = await supabase.storage
        .from("avatars")
        .download(path);
      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data);
      setAvatarUrl(url);
    } catch (error) {
      console.log("Error downloading image: ", error);
    }
  }

  const uploadAvatar: React.ChangeEventHandler<HTMLInputElement> = async (
    event
  ) => {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = `${uid}.${fileExt}`;
      const filePath = `${fileName}`;

      let { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, file, { upsert: true });

      if (uploadError) {
        throw uploadError;
      }

      onUpload(filePath);
    } catch (error) {
      alert("Error uploading avatar!");
      console.log(error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex justify-center flex-col items-center">
      {avatarUrl ? (
        <img
          src={avatarUrl}
          alt="Avatar"
          className="rounded-full bg-blue-100"
          style={{ height: size, width: size, objectFit: "scale-down" }}
        />
      ) : (
        <div
          className="avatar no-image"
          style={{ height: size, width: size }}
        />
      )}
      <button className="py-2 px-5 text-base rounded-sm mt-4 btn--primary">
        <label className="button primary block" htmlFor="single">
          {uploading ? "Uploading ..." : "Upload"}
        </label>
        <input
          style={{
            visibility: "hidden",
            position: "absolute",
          }}
          type="file"
          id="single"
          accept="image/*"
          onChange={uploadAvatar}
          disabled={uploading}
        />
      </button>
    </div>
  );
}
