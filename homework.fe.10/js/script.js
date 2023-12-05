const showUsers = (users) => {
  const onlyFifteenUsers = users.slice(0, 15);

  const userContainer = document.createElement("div");
    userContainer.classList = "user-container";
    document.body.append(userContainer);

  onlyFifteenUsers.forEach((user) => {

    const cardContainer = document.createElement("div");
    cardContainer.classList = "card-container";
    userContainer.append(cardContainer);

    const image = document.createElement("img");
    image.src = user.image;

    const name = document.createElement("h3");
    name.innerText = `${user.firstName} ${user.lastName}`;

    const userAge = document.createElement("p");
    userAge.innerText = `Age: ${user.age}`;

    const userEmail = document.createElement("p");
    userEmail.innerText = `E-mail: ${user.email}`;

    const userPhone = document.createElement("p");
    userPhone.innerText = `Phone: ${user.phone}`;

    cardContainer.append( image, name, userAge, userEmail, userPhone);
  });
};

// Promise

// const fetchUsers = (callback) => {
//   fetch("https://dummyjson.com/users")
//     .then((res) => res.json())
//     .then((data) => callback(data.users));
// };
// fetchUsers(showUsers);

// Async await
const fetchUsers = async () => {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      showUsers(data.users);
  };
  fetchUsers();
