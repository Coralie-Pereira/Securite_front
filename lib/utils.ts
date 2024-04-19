import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: string[]): string {
  return twMerge(clsx(inputs));
}

export async function fetchData(url: string): Promise<any> {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Erreur de réseau : ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(
      "Une erreur est survenue lors de la récupération des données :",
      error
    );
    throw error;
  }
}
