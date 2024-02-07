export async function getTils() {
  const url =
    "https://port-0-ballang-server-qrd2als49b8m4.sel5.cloudtype.app/til";
  const options = { method: "GET" };

  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const tils = {
  getTils,
};

export default tils;
