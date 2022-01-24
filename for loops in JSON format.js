//JSON iterate Over for loop
var json = [{
    "Name" : "Karthik", 
    "Age"   : "21",
    "year" : "2022",
    "Sex": "Male"
},
{
    "Name" : "Sudharsan", 
    "Age"   : "20",
    "Year" : "2021",
    "Sex": "Male"
}];

for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj);
}

//JSON iterate Over for in loop
 var JSON = {
    "fname": "karthik",
    "lname": "chillz",
    "age": "21"
 }; 
 for (let x in JSON) {
    console.log(x + ": "+ JSON[x])
 }

 //JSON iterate Over for of loop
 const array1 = [{
    "model": "gixxer sf 150",
    "cc" : "150",
    "mileage": "45",
    "price": "150000"
  }];
  
  for (const element of array1) {
    console.log(element);
  }

  //JSON iterate over for each loop
  const array2 = [{
      "id" : "1557",
      "name" : "karthik",
      "section": "manufacturing",
      "year" : "2022"
  }];

array2.forEach(element => console.log(element));

