alert ("Welcom to Dr.phone")  


var username = prompt ('enter your name') ;
while ( username !== 'ali' && username !=='ahmed')
{
 prompt ('enter your name') ;
}

 if(username == "ali"){

   console.log('Hello = ' + 'User ali ');
 }

 else if (username == "ahmad"){

   console.log ('Hello = ' + 'user ahmad');
 }
 
 var userage = prompt ('enter your age ?');

 for (var i =1;i<=userage ;i++ ){
 }
if (userage <= 18 ){
  console.log('your age is '+ userage)
}
else if (userage >= 100){
  console.log('please cheek the age '+ userage)
}


 var phonetype = prompt ('please inter phone type (samsung , huawei, iphone) ? ')



function askuser(planguage){
  
  var phonetype =prompt('what type phone do you like '+ planguage + '?');
  return phonetype ;
}

 var answer1 = askuser('LG');
console.log (answer1);

askuser('Sony');
console.log (answer1);
   
askuser('Lenovo'); 
console.log (answer1);

var numberimg  =prompt ('please inter how many phons do you want to order ?');
for (var i =1 ; i<= numberimg ;i++ ){

 if (phonetype == 'samsung'){
   var imge = '<img src ="https://images.samsung.com/is/image/samsung/assets/levant/galaxy-s21/home/HOME_T_O_KV_IM-KV_624X352_MO.jpg?$624_352_PNG$"/> alt= "samsung"';

  document.write(imge);
 }

else if (phonetype == 'huawei'){
var imges = '<img src ="https://i.ytimg.com/vi/9hBLW9m27yc/maxresdefault.jpg"/> alt ="huawei"';
document.write(imges);
}

else if (phonetype == 'iphone'){

var phone  ='<img src="img/04.jpg" alt = "iphone"/>';
document.write(phone);


}

}
