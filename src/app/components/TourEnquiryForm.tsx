"use client";

import { useActionState, type ReactNode } from "react";
import { submitContactForm, type ContactFormState } from "@/app/contact/actions";

const initialState: ContactFormState = { status: "idle", message: "" };

export default function TourEnquiryForm({ title, children }: { title: string; children: ReactNode }) {
  const [state, action, pending] = useActionState(async (previous: ContactFormState, data: FormData) => {
    data.set("name", [data.get("firstName"), data.get("lastName")].join(" "));
    data.set("message", [
      `Tour: ${title}`,
      `Country: ${data.get("country")}`,
      `Phone: ${data.get("phone")}`,
      `Adults: ${data.get("adults")}, children: ${data.get("children") || 0}`,
      "",
      data.get("message"),
    ].join("\n"));
    return submitContactForm(previous, data);
  }, initialState);

  return (
    <form id="contact-form" action={action} className="contact-form border radius-10" aria-busy={pending}>
      <div className="contact-form-honeypot" aria-hidden="true">
        <label htmlFor="tour-fax">Fax</label>
        <input id="tour-fax" name="fax" tabIndex={-1} autoComplete="off" />
      </div>
      <fieldset disabled={pending}>{children}</fieldset>
      <p className="demo-form-message" role="status">{pending ? "Sending enquiry…" : state.message}</p>
    </form>
  );
}
