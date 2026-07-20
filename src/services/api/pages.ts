import { useEffect, useState } from "react";

import { get } from "./client";
import type { WorkPage, HomePage } from "./types";


export async function getPage<T>(slug: string): Promise<T> {
  const pages = await get<T[]>(`/pages?slug=${slug}`);

  if (!pages.length) {
    throw new Error(`Page "${slug}" not found.`);
  }

  return pages[0];
}

export async function getHomePage(): Promise<HomePage> {
  return getPage<HomePage>("home");
}

export async function getWorkPage(): Promise<WorkPage> {
  return getPage<WorkPage>("work");
}

// export async function getAboutPage(): Promise<AboutPage> {
//   return getPage<AboutPage>("about");
// }