"use server";

import { auth } from "@/auth";
import Razorpay from "razorpay";
import { v4 } from "uuid";

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

export async function createRazorpayOrder(
  plan: "basic" | "pro",
  period: "monthly" | "yearly",
) {
  try {
    const session = await auth();

    if (!session?.user || !session?.user.email) {
      throw new Error("Unauthorized");
    }

    var instance = new Razorpay({
      key_id: "YOUR_KEY_ID",
      key_secret: "YOUR_SECRET",
    });
    const receptId = `sub_rcptid_${v4()}`;

    var options = {
      amount: 50000, // amount in the smallest currency unit
      currency: "INR",
      receipt: receptId,
    };
    instance.orders.create(options, function (err, order) {
      console.log(order);
    });
    const planId = PLAN_ID_MAP[plan][period];

    const orderId = await instance.subscriptions.create({
      plan_id: planId,
      total_count: 1,
    });

    return orderId;
  } catch (error) {
    throw new Error("Failed to generate user stripe session");
  }
}
