// Add your code here
// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   };
  
//   const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify(formData),
//   };
  

function submitData(user, email){
  const newUser = {
    name: `${user}`,
    email: `${email}`
  }

  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(newUser)
  })
  .then(res => res.json())
  .then(resObj => domAppend(resObj.id))
  .catch(errFunc)
}

function domAppend(obj){
  const newID = document.createElement('p')
  const body = document.querySelector('body')
  newID.textContent = `${obj}`
  body.append(newID)
}

function errFunc(){
  const error = document.createElement('p')
  const body = document.querySelector('body')
  error.textContent = "Unauthorized Access"
  body.append(error)
}


  // fetch("http://localhost:3000/dogs", configurationObject);

  