var greating = "እንኰዋን በደህና መጡ!!";
customerName = "ውድ ይበልጣል";
messageBoard = "እባክዎ የሚገዙትን እቃ ትዕዛዝ ልክነት ያረጋግጡ፡፡ ";
var welcomeMesage = greating
  .concat(" ", customerName)
  .concat(" ", messageBoard);
var elGreating = document.getElementById("greating");
elGreating.textContent = welcomeMesage;
var itemOfmatarials = "እንጀራ";
var amount = 5;
var pricePerItem = 30;
var totalPrice = amount * pricePerItem;

elItem = document.getElementById("items");
elItem.textContent = itemOfmatarials;
itemAmount = document.getElementById("count");
itemAmount.textContent = amount;
priceofItem = document.getElementById("price");
priceofItem.textContent ='$' + pricePerItem;
totalpriceof = document.getElementById('total-prices')
totalpriceof.textContent = '$' + totalPrice
function makepayment (){
  var btn ='\"<button onclick="window.print()">ደረሰኝ ትፈልጋለህ?</button> \"'
  var text,finalMessage;
   var confirmbox = confirm('ክፍያ ልክፈል??')
   if(confirmbox ==true ){
     text = 'ክፍያው ተጠናቋል እናመሰግናለን!!'
     finalMessage = text.concat(" ",btn)
   }else{
     text = 'ክፍያው ተሰርዟል!!'
     finalMessage= text;
   }
   document.getElementById('output').innerHTML = finalMessage
}