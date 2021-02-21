let skill=document.getElementById('loved');
let cross =document.querySelector('.modal-class');

function show(){
    let x= document.querySelector('.modal-class');
    x.style.display='block';
    console.log(x);
}
function textShow(data){
    this.data=data;
    this.text="";
    this.deleting=false;
}
var wait=200;
function changeText(){
    let obj= ['competitive programmer','Developer','Proud Indian'];
    let n=obj.length;
    let index=0;
    let textfull=false;
    let deleting=false;
    let len=0,newwait=20;
    let interval;
    function newText(){
        if(!deleting && !textfull){
            len++;
           
           skill.innerHTML=`${obj[index].substr(0,len)}`;
           newwait=20;
           if(len==obj[index].length){
           textfull=true;
           newwait=2000;
           }
        }
        else if(deleting){
            len--;
           skill.innerHTML=`${obj[index].substr(0,len)}`;
            newwait=30;
           if(len==0){
           deleting=false;
           index=(index+1)%n;
          }
        } else if(textfull){
           deleting=true;
           textfull=false;
           newwait=30;
        }
        clearInterval(interval);
        wait=newwait;
        interval=setInterval(newText,wait);
    }
    newText();
}
changeText();


function hide(){
    cross.style.display='none';
}

function sendMail(){
    let frm=document.querySelector('form');
    let inp=document.querySelectorAll('input');
    let txt=document.querySelector('textarea')
    let name=inp[0].value;
    let email=inp[1].value;
    let msg=txt.value
    Email.send({
        Host : "smtp.gmail.com",
        Username : "kassu8139@gmail.com",
        Password : "kumar@12345kassu",
        To : 'kumarkashyap5662@gmail.com',
        From : "kassu8139@gmail.com",
        Subject : "Someone visit your site",
        Body : `Name : ${name} <br> Email : ${email} <br> Message : ${msg}`
    }).then(
        (message)=>{
            alert("Thank you, we have recieved your message :)")
           frm.reset();
        }
    );
    //console.log(name,email,msg);
}