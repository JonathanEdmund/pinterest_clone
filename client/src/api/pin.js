export const pin = async (input) => {
  const response = await fetch("/api/user/pin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });
  return response.json();
};
