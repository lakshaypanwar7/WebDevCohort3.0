function fetchUserData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(`Fetched data:`, data.name);
        resolve("Data fetched successfully!");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        reject(error);
      });
  });
}

async function fetchAllData() {
  await fetchUserData("https://jsonplaceholder.typicode.com/users/1");
  await fetchUserData("https://jsonplaceholder.typicode.com/users/2");
  await fetchUserData("https://jsonplaceholder.typicode.com/users/3");
}

fetchAllData();
