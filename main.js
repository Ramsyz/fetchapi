function fetchData() {
  fetch("https://reqres.in/api/users")
    .then((response) => {
      if (!response.ok) {
        throw Error("error");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.data);
      const html = data.data
        .map((user) => {
          return `
          <div class='user'>
          <p><img src='${user.avatar}' alt='${user.first_name}'/></p>
          <p>Name: ${user.first_name}</p>
          <p>Email: ${user.email}</p>
          </div>
          `;
        })
        .join("");
      document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
    })
    .catch((error) => {
      console.log(error);
    });
}

fetchData();

/* POST request*/
function postData() {
  fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "morpheus",
      job: "leader",
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw Error("error");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

fetchData();
