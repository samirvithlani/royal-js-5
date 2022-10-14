var userData = [];
async function loadDoc() {
  var res = await fetch("https://reqres.in/api/users?page=2", {
    method: "GET",
  });
  userData = await res.json();
  userData = userData.data;
  console.log(userData);

  userData.map((user) => {
    console.log("firstName", user.first_name);
    //td
  });
}
async function getWeather() {
  var city = "Ahmedabad";
  var wdata = await fetch(
    "https://open-weather13.p.rapidapi.com/city/" + city,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2cc1fb7fd1msh4c4e1eb5e0cf8e5p13cfd1jsn422b10471be6",
        "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
      },
    }
  );
    var weatherData = await wdata.json();
    console.log(weatherData);
}
async function updateData() {
  var id = 2;
  let newUser = {
    name: "rajesh",
    job: "developer",
  };
  var updatdUser = await fetch(
    "https://reqres.in/api/users/" + id,
    {
      method: "PUT",
    },
    newUser
  );
  var updateRes = await updatdUser;
  if (updateRes.status == 200) {
    console.log("updated successfully");
    updateRes = await updateRes.json();
    console.log(updateRes);
  }
}
async function deleteData() {
  var id = 1;
  var deletedUser = await fetch("https://reqres.in/api/users/" + id, {
    method: "DELETE",
  });
  var deleteRes = await deletedUser;
  console.log(deleteRes.status);
}

async function getDatabyId() {
  var id = 1;
  var singleUser = await fetch("https://reqres.in/api/users/" + 1, {
    method: "GET",
  });
  var singleUserRes = await singleUser.json();
  console.log(singleUserRes);
}

async function addDoc() {
  let user = {
    name: "rajesh",
    job: "developer",
  };
  var res1 = await fetch(
    "https://reqres.in/api/users?page=2",
    {
      method: "POST",
    },
    user
  );
  let response = await res1.json();
  console.log(response);
  alert("user added successfully");
}
