const user = {
  firstName: "John",
  lastName: "Doe",
  age: 32,
  email: "johndoe@example.com",
  address: {
    city: "New York",
    state: "NY",
    country: "USA"
  }
};


function getUserInfo (user)  {

 const { firstName, lastName, address : { city, country } } = user;


return {firstName, lastName, city, country }
}

const userInfo = getUserInfo(user);

console.log(userInfo)







// console.log(getFullName(user1)) // 25

// console.log(getFullName(user2))// ; // null

