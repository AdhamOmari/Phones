alert ("Welcom to Dr.phone")

var username = prompt ('enter your name') ;

 if(username == "ali"){

   console.log('hello = ' + 'User ali ');
 }

 else if (username == "ahmad"){

   console.log ('hello = ' + 'user ahmad');
 }
 
 var userage = prompt ('enter your age ')
if (userage == 25){
  console.log('your age is '+ userage)
}
else if (userage == 30 ){
  console.log('your age is '+ userage)
}
else if (userage == 20){
  console.log('your age is '+ userage)
}

 var phonetype = prompt ('please inter phone type (samsung , huawei, iphone)')

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