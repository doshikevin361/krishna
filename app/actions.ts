"use server"

import { z } from "zod"

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export async function submitContactForm(formData: FormData) {
  try {
    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      company: formData.get("company") as string,
      service: formData.get("service") as string,
      message: formData.get("message") as string,
    }

    const validatedData = contactFormSchema.parse(data)

    // Simulate email sending to Krishna at Execura
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Here you would integrate with your email service to send to Krishna:
    // - Send to krishna@execura.com
    // - CC to info@execura.com
    // - Include Execura branding in email template
    // - Auto-reply with Execura contact details

    console.log("Execura contact form submission:", validatedData)

    return {
      success: true,
      message: `Thank you ${validatedData.firstName}! Your message has been sent directly to Krishna Patel at Execura. We'll get back to you within 24 hours. For urgent matters, call Krishna at +91 8849510517.`,
    }
  } catch (error) {
    console.error("Execura contact form error:", error)
    return {
      success: false,
      message:
        "Sorry, there was an error sending your message to Krishna. Please try calling directly at +91 8849510517 or email krishna@execura.com.",
    }
  }
}

export async function subscribeNewsletter(formData: FormData) {
  try {
    const email = formData.get("email") as string
    const jobTitle = formData.get("jobTitle") as string
    const location = formData.get("location") as string

    if (!email || !email.includes("@")) {
      return {
        success: false,
        message: "Please enter a valid email address",
      }
    }

    // Simulate newsletter subscription for Execura job alerts
    await new Promise((resolve) => setTimeout(resolve, 800))

    return {
      success: true,
      message:
        "Excellent! You're now subscribed to Execura job alerts. Krishna's team will personally notify you of matching opportunities in Ahmedabad and across Gujarat.",
    }
  } catch (error) {
    return {
      success: false,
      message:
        "Sorry, there was an error setting up your job alerts. Please contact Krishna directly at +91 8849510517.",
    }
  }
}
