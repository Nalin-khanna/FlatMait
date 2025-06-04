import { NextRequest, NextResponse } from "next/server";
import { cloudinary } from "@/lib/cloudinary_config"; 
import { UploadApiResponse } from "cloudinary";

export async function POST(req: NextRequest) {
  const data = await req.formData();
  const file = data.get("file");
  console.log(file)

  if (!file || typeof file === "string") {
    return NextResponse.json({ error: "Invalid file" }, { status: 400 });
  }

  const buffer = Buffer.from(await (file as Blob).arrayBuffer());

  try {
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: "profile_pics",
            resource_type: "image",
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        )
        .end(buffer);
    });

    return NextResponse.json({ url: (result as UploadApiResponse).secure_url });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
