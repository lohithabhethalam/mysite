function book()
{

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let date = document.getElementById("date").value;
let hours = document.getElementById("hours").value;
let time = document.getElementById("time").value;
let team1 = document.getElementById("team1").value;
let team2 = document.getElementById("team2").value;

if(name === "" || email === "" || date === "" || hours === "" || time === "" || team1 === "" || team2 === "")
{
    alert('please enter all the details');
}
else{

    let duration = parseInt(time) + parseInt(hours);
    let amount = parseInt(hours)*10;
//alert("booking conformed");

alert("booking confirmed\n"+"Name: "+name+"\n Email: "+email+"\nDate: "+ date+"\nFrom: "+time+"\nTo: "+duration+"\n Team1 Captain: "+team1+"\nTeam2 Captain: "+team2+"\n Amount to be paid: $ "+amount);

}
  
}