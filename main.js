menu_list_array = ["Veg Margherita Pizza","Chicken Sausage Pizza" , "Veg Farmhouse Pizza" 
  ,"Chicken Barbeque Pizza" , "Tandoori Paneer Pizza" , "Deluxe Veg Pizza"];                 

function getmenu(){
var htmldata;
htmldata="<ol class='menu_list'>";
for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata + "<li>" + menu_list_array[i] + "</li>"
}
htmldata=htmldata+"</ol>"
document.getElementById("display_menu").innerHTML = htmldata;
console.log(htmldata);
console.log(menu_list_array);
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata ="<section class='cards'>"
for (var j=0;j<menu_list_array.length;j++){
  htmldata = htmldata+'<div class="cards">'+ '<img src="pizzaImg.png" id="addedimage">' + menu_list_array[j] + "</div>"
  
}
htmldata = htmldata + "</section>";
document.getElementById("display_addedmenu").innerHTML = htmldata;


}

function add_top(){
  var item = document.getElementById("add_item").value;
  menu_list_array.push(item);
  add_item();
  
}