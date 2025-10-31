import type { User } from "../types/user.type";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function fetchUsers(): Promise<User[]> {
  const res = await fetch(`${BASE_URL}/users`);
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}

export async function fetchUserById(id: string): Promise<User> {
  const res = await fetch(`${BASE_URL}/users/${id}`);
  if (!res.ok) throw new Error("Failed to fetch user");
  return res.json();
}
