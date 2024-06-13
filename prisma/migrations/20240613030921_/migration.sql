-- AlterTable
ALTER TABLE "users" ADD COLUMN "razorpay_current_period_end" DATETIME;
ALTER TABLE "users" ADD COLUMN "razorpay_payment_id" TEXT;
