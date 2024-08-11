function greet(user, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Hello ${user}`);
      resolve("User greeted !");
    }, delay);
  });
}

async function greets() {
  await greet("Harkirat", 1000);
  await greet("Lakshay", 1000);
  await greet("Aadi", 1000);
}
greets();
