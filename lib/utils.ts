import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function getCurrentDateTime(): string {
  const now = new Date()

  const weekdays = ["週日","週一","週二","週三","週四","週五","週六"]

  const date = now.toLocaleDateString()
  const time = now.toLocaleTimeString()
  const day = weekdays[now.getDay()]

  return `${date} (${day}) ${time}`
}