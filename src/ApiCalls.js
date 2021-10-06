export const fetchData = async () => {
  try {
    const response = await fetch(`https://jservice.io/api/random`, {
      method: "GET",
    });
    return await response.json();
  } catch (err) {
    return console.error(err);
  }
};
