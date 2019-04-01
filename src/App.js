import React from "react";
import ContactCard from "./ContactCard";
import catData from "./catData";

function App() {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  /*const double = nums.map(function(num) {
    return num * 2;
  });*/
  const double = nums.map(num => num * 2);
  console.log(double);

  const cats = {catData.map(cat => {
      {
        cat.imgUrl;
      }
      {
        cat.name;
      }
      Phone: {
        cat.phone;
      }
      Email: {
        cat.email;
      }
      //end cat function, end map
    })}
  return <div className="contacts">{cats}</div>;
}

export default App;
