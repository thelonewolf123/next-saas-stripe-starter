"use server";

import { auth } from "@/auth";
import Razorpay from "razorpay";

import { env } from "@/env.mjs";

const PLAN_ID_MAP = {
  basic: {
    monthly: env.NEXT_PUBLIC_RAZORPAY_BASIC_MONTHLY_PLAN_ID,
    yearly: env.NEXT_PUBLIC_RAZORPAY_BASIC_YEARLY_PLAN_ID,
  },
  pro: {
    monthly: env.NEXT_PUBLIC_RAZORPAY_PRO_MONTHLY_PLAN_ID,
    yearly: env.NEXT_PUBLIC_RAZORPAY_PRO_YEARLY_PLAN_ID,
  },
};

export async function createRazorpaySubscription(planId: string) {
  try {
    const session = await auth();

    if (!session?.user || !session?.user.email) {
      throw new Error("Unauthorized");
    }

    var instance = new Razorpay({
      key_id: env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      key_secret: env.RAZORPAY_KEY_SECRET,
    });

    const orderId = await instance.subscriptions.create({
      plan_id: planId,
      total_count: 1,
    });

    return orderId;
  } catch (error) {
    throw new Error("Failed to generate user stripe session");
  }
}
