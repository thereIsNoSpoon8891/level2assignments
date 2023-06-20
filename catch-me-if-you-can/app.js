
function sum(x, y){

    if(x === NaN ){ //check data types first and throw error
        throw new Error ("please only enter numbers")
    } else {
        return x + y;
}
    }
    

try {
    sum("1", "2")
}

catch (error) {
    console.log(error)
}

finally {
    console.log(sum(1, 2))
}
  


try {
    sum("1", "2")
}

catch(error) {
console.log(error)
}


const user = {username: "sam", password: "123abc"};

function login(username, password){
  if (username !== "sam"){
throw "incorrect User Name"
  }
  if (password !== "123abc"){
    throw "incorrect Password"
  } else {console.log("login successful!")}
}
try { 
login("sam", "123ABC")
}
catch(error){
    console.log(error)
}

try{
    login("sam", "123abc")
}

catch(error){
    console.log(error)
}