"use client";

import { useState, type FormEvent, type ReactNode } from "react";

type Mode = "newsletter" | "sign-in" | "sign-up" | "reset-password" | "comment";

export default function DemoForm({ mode, className, children }: { mode: Mode; className?: string; children: ReactNode }) {
  const [message, setMessage] = useState("");
  const [comment, setComment] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = new FormData(form);
    if (mode === "newsletter") {
      const email = String(fields.get("email") ?? "").trim().toLowerCase();
      try {
        const saved = JSON.parse(localStorage.getItem("touriza-newsletter") ?? "[]") as string[];
        if (!saved.includes(email)) localStorage.setItem("touriza-newsletter", JSON.stringify([...saved, email]));
        setMessage("Subscription saved in this browser for the demo.");
      } catch {
        setMessage("Browser storage is unavailable. Your subscription could not be saved.");
        return;
      }
    } else if (mode === "comment") {
      const text = String(fields.get("comment") ?? "").trim();
      if (!text) {
        setMessage("Enter a comment before submitting.");
        return;
      }
      setComment(text);
      setMessage("Comment preview");
    } else {
      setMessage({
        "sign-in": "Sign-in form validated. This demo has no account service.",
        "sign-up": "Registration form validated. This demo has no account service.",
        "reset-password": "Reset form validated. This demo does not send reset emails.",
      }[mode]);
    }
    form.reset();
  }

  return (
    <>
      <form className={className} method="post" onSubmit={submit}>{children}</form>
      {message && <p className="demo-form-message" role="status">{message}</p>}
      {comment && <p className="demo-comment border radius-6 p-3">{comment}</p>}
    </>
  );
}
