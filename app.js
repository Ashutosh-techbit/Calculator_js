let btn = document.querySelectorAll(".num");
let op= document.querySelectorAll(".op");
let str="";

for (nums of btn) {
  nums.addEventListener("click", (event) => {
    if(event.target.innerText == "="){
      // usng eval function
        str= eval (str);
        document.querySelector("input").value=str;
    }
    else if(event.target.innerText == "clr"){
        str="";
        document.querySelector("input").value=str;
    }
    else{
    console.dir(event.target.innerText);
    str+=event.target.innerText;
    document.querySelector("input").value=str;
    }
        
  });
}




