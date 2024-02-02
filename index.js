const btn = document.getElementById("btn");
const birthday = document.getElementById("birthday");
const result = document.getElementById("result");

btn.addEventListener("click", calculateAge);
function calculateAge() {
  const birthdayValue = birthday.value;       //Input la birthday date entered

  if (birthdayValue === "") 
  {
    alert("Please enter your birthday");
  } 
  else 
  {
    const age = getAge(birthdayValue);
    result.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
}


function getAge(birthdayValue) 
{
  const currentDate = new Date();                 //Current Date
  console.log(currentDate)                     //Fri Feb 02 2024 15:10:05 GMT+0530 (India Standard Time)
  console.log(currentDate.getFullYear())        //2024

  const birthdayDate = new Date(birthdayValue);    //Birth Date

  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  console.log(age)                                 //2024-1992=32
  const month = currentDate.getMonth() - birthdayDate.getMonth();
  console.log(month)                               //02-08= -6

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  )    //if month less than 0 or current date < birth date= age--
  {
    age--;
  }

  return age;
}


