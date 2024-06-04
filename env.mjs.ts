import { z } from 'zod';

import { createEnv } from '@t3-oss/env-nextjs';

export const env = createEnv({
  server: {
    // This is optional because it's only used in development.
    // See https://next-auth.js.org/deployment.
    NEXTAUTH_URL: z.string().url().optional(),
    AUTH_SECRET: z.string().min(1),
    GOOGLE_CLIENT_ID: z.string().min(1),
    GOOGLE_CLIENT_SECRET: z.string().min(1),
    GITHUB_OAUTH_TOKEN: z.string().min(1),
    DATABASE_URL: z.string().min(1),
    RESEND_API_KEY: z.string().min(1),
    RAZORPAY_KEY_ID: z.string().min(1),
    RAZORPAY_KEY_SECRET: z.string().min(1),
    STRIPE_WEBHOOK_SECRET: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string().min(1),
    NEXT_PUBLIC_RAZORPAY_PRO_MONTHLY_PLAN_ID: z.string().min(1),
    NEXT_PUBLIC_RAZORPAY_PRO_YEARLY_PLAN_ID: z.string().min(1),
    NEXT_PUBLIC_RAZORPAY_BASIC_MONTHLY_PLAN_ID: z.string().min(1),
    NEXT_PUBLIC_RAZORPAY_BASIC_YEARLY_PLAN_ID: z.string().min(1),

    // stripe
    NEXT_PUBLIC_STRIPE_BUSINESS_MONTHLY_PLAN_ID: z.string().min(1),
    NEXT_PUBLIC_STRIPE_BUSINESS_YEARLY_PLAN_ID: z.string().min(1),
    NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PLAN_ID: z.string().min(1),
    NEXT_PUBLIC_STRIPE_PRO_YEARLY_PLAN_ID: z.string().min(1),
  },
  runtimeEnv: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    AUTH_SECRET: process.env.AUTH_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    GITHUB_OAUTH_TOKEN: process.env.GITHUB_OAUTH_TOKEN,
    DATABASE_URL: process.env.DATABASE_URL,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,

    // RAZOR-Pay
    RAZORPAY_KEY_ID: process.env.RAZORPAY_KEY_ID,
    RAZORPAY_KEY_SECRET: process.env.RAZORPAY_KEY_SECRET,
    NEXT_PUBLIC_RAZORPAY_PRO_MONTHLY_PLAN_ID:
      process.env.NEXT_PUBLIC_RAZORPAY_PRO_MONTHLY_PLAN_ID,
    NEXT_PUBLIC_RAZORPAY_PRO_YEARLY_PLAN_ID:
      process.env.NEXT_PUBLIC_RAZORPAY_PRO_YEARLY_PLAN_ID,
    NEXT_PUBLIC_RAZORPAY_BASIC_MONTHLY_PLAN_ID:
      process.env.NEXT_PUBLIC_RAZORPAY_BASIC_MONTHLY_PLAN_ID,
    NEXT_PUBLIC_RAZORPAY_BASIC_YEARLY_PLAN_ID:
      process.env.NEXT_PUBLIC_RAZORPAY_BASIC_YEARLY_PLAN_ID,

    // stripe
    NEXT_PUBLIC_STRIPE_BUSINESS_MONTHLY_PLAN_ID:
      process.env.NEXT_PUBLIC_STRIPE_BUSINESS_MONTHLY_PLAN_ID,
    NEXT_PUBLIC_STRIPE_BUSINESS_YEARLY_PLAN_ID:
      process.env.NEXT_PUBLIC_STRIPE_BUSINESS_YEARLY_PLAN_ID,
    NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PLAN_ID:
      process.env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PLAN_ID,
    NEXT_PUBLIC_STRIPE_PRO_YEARLY_PLAN_ID:
      process.env.NEXT_PUBLIC_STRIPE_PRO_YEARLY_PLAN_ID,
  },
});
