function submit(){
    fnameinput=document.getElementById("fname");
    let nameRegex=/^[a-zA-Z]+$/.test(fnameinput.value);
    if(nameRegex){
        console.log(fnameinput.value);
        document.getElementById("hiddenfullname").style.display="none";
    }
    else{
        
        document.getElementById("hiddenfullname").style.display="block";
    }

    ageinput=document.getElementById("age");
    let ageRegex=/^[0-9]{2}$/.test(ageinput.value);
    if(ageRegex){
        console.log(ageinput.value);
        document.getElementById("hiddenage").style.display="none";
    }
    else{
        
        document.getElementById("hiddenage").style.display="block";
    }

    var dob = document.getElementById('dob');
    console.log(dob.value);

    phnoinput=document.getElementById("phno");
    let phnoRegex=/^[0-9]{10}$/.test(phnoinput.value);

    if(phnoRegex){
        console.log(phnoinput.value);
        document.getElementById("hiddennumber").style.display="none";
    }
    else{
        document.getElementById("hiddennumber").style.display="block";
    }

    emailinput=document.getElementById("email");
    let emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailinput.value);
    
    if(emailRegex){
        console.log(emailinput.value);
        document.getElementById("hiddenemail").style.display="none";
    }
    else{
        document.getElementById("hiddenemail").style.display="block";
    }

    var gender = document.getElementById('gender');
    console.log(gender.value);

    if(nameRegex&&phnoRegex&&emailRegex&&gender.value
        !=""&&ageRegex!="")
    {   
        window.open("newhtml.html")
        document.getElementById(compiler).style.display="block"
    }
   
}