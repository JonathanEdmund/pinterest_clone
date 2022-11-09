export const login = async (input) => {
  const response = await fetch("/api/post");
  return response.json();
};
