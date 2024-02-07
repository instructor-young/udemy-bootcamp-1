import { Til } from "@/types/Til.type";

export async function getTils() {
  const url =
    "https://port-0-ballang-server-qrd2als49b8m4.sel5.cloudtype.app/til";
  const options = { method: "GET" };

  const response = await fetch(url, options);
  const data = await response.json();

  return data as Til[];
}

export async function getTil(id: string) {
  const url = `https://port-0-ballang-server-qrd2als49b8m4.sel5.cloudtype.app/til/${id}`;
  const options = { method: "GET" };
  const response = await fetch(url, options);
  const data = await response.json();

  return data as Til;
}

export async function createTil(til: { title: string; content: string }) {
  const url = `${window.location.origin}/api/til`;
  const options = { method: "POST", body: JSON.stringify(til) };
  const response = await fetch(url, options);
  const data = await response.json();

  return data as Til;
}

const tils = {
  getTils,
  getTil,
  createTil,
};

export default tils;
