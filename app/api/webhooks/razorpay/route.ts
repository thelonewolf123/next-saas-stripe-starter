import { auth } from "@/auth";
import Razorpay from "razorpay";

import { env } from "@/env.mjs";

export async function POST(request: Request) {
  try {
    const session = await auth();

    if (!session?.user || !session?.user.email) {
      throw new Error("Unauthorized");
    }

    const body = await request.json();

    const isValid = Razorpay.validateWebhookSignature(
      body,
      request.headers.get("X-Razorpay-Signature") || "",
      env.RAZORPAY_KEY_SECRET,
    );

    console.log("isValid", isValid);
  } catch (error) {
    throw new Error("Failed to generate user stripe session");
  }
}
