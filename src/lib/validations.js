import * as z from "zod"

export const paymentFormSchema = z.object({
  upiId: z
    .string()
    .min(1, "UPI ID is required")
    .regex(/^[\w.-]+@[\w.-]+$/, "Invalid UPI ID format"),
  amount: z
    .string()
    .min(1, "Amount is required")
    .regex(/^\d+(\.\d{1,2})?$/, "Invalid amount format"),
  deadline: z
    .string()
    .min(1, "Delivery deadline is required"),
  protectionLevel: z
    .enum(["standard", "premium"], {
      required_error: "Please select a protection level",
    })
})