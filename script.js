//Todo: M+, M- MC
let string = "";
let buttons = document.querySelectorAll('.button');
let memory = 0;

let lastResult = null;
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click',(e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
      localStorage.setItem("memory",string);
    }
    else if(e.target.innerHTML == 'M+'){
      memory = parseFloat(localStorage.getItem("memory"));
      string = memory + '+';
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'M-'){
      memory = parseFloat(localStorage.getItem("memory"));
      string = memory + '-';
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = "";
      document.querySelector('input').value = string;
      memory = string;
    }
    else{
    console.log(e.target);
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
    // memory = string;
    }
  })
})


