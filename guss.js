let number;

const generate_number=()=>{
    number=Math.floor(Math.random()*6)+1;
     console.log(number);
}

const generate_number_btn_click=()=>{
    document.querySelector("#section1").style.display="none";
    document.querySelector("#section2").style.display="none";
    document.querySelector("#play").style.display="none";
    document.querySelector("#section3").style.display="block";

    setTimeout(()=>{
        generate_number();
        document.querySelector("#section1").style.display="none";
        document.querySelector("#section2").style.display="block";
        document.querySelector("#section3").style.display="none";
        document.querySelector("#play").style.display="none";
        document.querySelector("#field").value="";
    },3000);
  
};

const check_number=()=>{
    let check=document.querySelector("#field").value;
    if(check == number){
        alert("congrates, you won the game");
    }else{
        alert("OOPS !! Your Guess Is Wrong...");
    }
    document.querySelector("#play").style.display="block";
}