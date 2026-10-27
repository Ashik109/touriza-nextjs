"use server";

import { randomUUID } from "node:crypto";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function field(formData: FormData, name: string, maximumLength: number) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim().slice(0, maximumLength) : "";
}

export async function submitContactForm(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  if (field(formData, "fax", 100)) {
    return { status: "success", message: "Thank you. Your message has been received." };
  }

  const submission = {
    id: randomUUID(),
    name: field(formData, "name", 100),
    email: field(formData, "email", 254),
    company: field(formData, "company", 120),
    website: field(formData, "website", 300),
    message: field(formData, "message", 3000),
    submittedAt: new Date().toISOString(),
  };

  if (!submission.name || !emailPattern.test(submission.email) || submission.message.length < 10) {
    return {
      status: "error",
      message: "Please enter your name, a valid email, and a message of at least 10 characters.",
    };
  }

  try {
    const endpoint = process.env.CONTACT_FORM_ENDPOINT
      ?? "https://formsubmit.co/ajax/support@reactheme.com";
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...submission,
        _subject: `New Touriza enquiry from ${submission.name}`,
        _template: "table",
        _captcha: "false",
      }),
      cache: "no-store",
    });
    if (!response.ok) throw new Error(`Contact endpoint returned ${response.status}`);

    return { status: "success", message: "Thank you! Your enquiry has been sent successfully." };
  } catch (error) {
    console.error("Unable to save contact submission", error);
    return {
      status: "error",
      message: "We could not send your enquiry right now. Please try again shortly.",
    };
  }
}
