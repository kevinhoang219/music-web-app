// app/api/test-user/route.ts

export async function GET() {
    const { default: UserSpotify } = await import("@/models/UserSpotify");
    console.log("✅ UserSpotify loaded:", typeof UserSpotify);
    return Response.json({ status: "ok" });
  }
  