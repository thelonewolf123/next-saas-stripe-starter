import Razorpay from 'razorpay';

import { auth } from '@/auth';
import { env } from '@/env.mjs';

export async function POST(request: Request) {
  try {
    const session = await auth();

    if (!session?.user || !session?.user.email) {
      throw new Error("Unauthorized");
    }

    var instance = new Razorpay({
      key_id: env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      key_secret: env.RAZORPAY_KEY_SECRET,
    });
  } catch (error) {
    throw new Error("Failed to generate user stripe session");
  }
}
