const home = async () => {
  const response = await fetch("/api/post");
  return response.json();
};

export default home;
