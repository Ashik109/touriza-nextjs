"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { titleFromSlug } from "@/data/details";

const key = "touriza-saved-tours";
const event = "touriza:saved-tours-updated";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(event, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(event, callback);
  };
}

function readSavedTours() {
  try {
    return localStorage.getItem(key) ?? "[]";
  } catch {
    return "[]";
  }
}

export default function SavedTourList() {
  const snapshot = useSyncExternalStore(subscribe, readSavedTours, () => "[]");
  let paths: string[] = [];
  try {
    const values: unknown = JSON.parse(snapshot);
    if (Array.isArray(values)) paths = values.filter((value): value is string => typeof value === "string" && /^\/tour\/[a-z0-9-]+$/.test(value));
  } catch {
    // Ignore malformed browser data.
  }
  if (!paths.length) return <p>No saved tours yet. <Link href="/home-six">Explore tours to start your list</Link>.</p>;
  return (
    <ul className="demo-saved-list">
      {paths.map(path => {
        const title = titleFromSlug(path.slice("/tour/".length));
        return (
          <li key={path}>
            <Link href={path}>{title}</Link>
            <button type="button" className="rts-btn btn-primary" aria-label={`Remove ${title}`} onClick={() => {
              localStorage.setItem(key, JSON.stringify(paths.filter(item => item !== path)));
              window.dispatchEvent(new Event(event));
            }}>Remove</button>
          </li>
        );
      })}
    </ul>
  );
}
