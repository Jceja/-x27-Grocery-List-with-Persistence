window.onload = loadCookieList
var myList = [] ;
function addItem(){
  var input = document.getElementById("newItem").value;

 document.getElementById("newItem").value = "";
  displayItem(foodList);
}
function removeParentListItem(){
  var mom = this.parentNode;
  var grandma = mom.parentNode;
  grandma.removeChild(mom);
  itemRemove = mom.firstChild.textContent;
  itemIndex = myList(itemRemove);
  myList.splice(itemIndex,1);
}
function saveList(){
  var newList = myList.toString();

  setCookie("listA", newList, 10 )
}
function clearList(){
  var allNothing=document.getElementById("listDisplay");
   allNothing.innerHTML= "";
  myList = [];
}
function displayItem(foodList){
  var foodList;
  var index;
  index = myList.findIndex(foodList);
    if(index == -1){
    var item =  document.createElement("li");
    myList.push(input);
    console.log(myList);
    myList = myList.findIndex;

    var list = document.getElementById("listDisplay");
    var item = document.createElement("li");
    var btnClose = document.createElement("button")
    btnClose.addEventListener("click", removeParentListItem);
    btnClose.classList.add("btn","btn-danger","btn-xs");
    iconClose = document.createElement("span");
    iconClose.classList.add("glyphicon","glyphicon-remove");
    btnClose.appendChild(iconClose);
    item.appendChild(btnClose);
    var itemName = document.createTextNode(input);
    item.appendChild(itemName);
    list.appendChild(item);
    }


}
function loadCookieList(){
  var Glist = getCookie("listA");
  var arrayCookie = Glist.split(" ");
  var i;
  for (i =0; i< arrayCookie.length; i++){
 displayItem();
  document.createElement("li");
  }
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
