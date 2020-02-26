var addbtn=document.getElementById('add');
var billbtn=document.getElementById('bill');
var item1=document.getElementById('item').value;
var quantity1=document.getElementById('quantity').value;
var waitstaff1=document.getElementById('waitstaff').value;
var tip1=document.getElementById('tip').value;
var cart1=document.getElementById("cart");
function addetails()
{
    var temp=document.createElement("div");
    var rate=rateCard(item1);
    temp.innerHTML="Cost: "+rate+",  Item: "+item1+",  Quantity: "+quantity1+",  Waitstaff: "+waitstaff1+",  Tip: "+tip1;
    console.log(item1);
    cart.appendChild(temp);
}
addbtn.addEventListener('click',addetails);

function rateCard(itemName) {
    var rate = 0;
    if(itemName == "Bhunne Besan Ka Murgh Tikka " || itemName == "Paneer Afghani") {
        rate = 75;
    }
    else if(itemName == "Mutton Shashlik" || itemName == "Lahori Raseelay " || itemName == "Dahi Vada") {
        rate = 90;
    }
    else if(itemName == "Fried Chicken Momo" || itemName == "Nargisi Kofta") {
        rate = 100;
    }
    else if(itemName == "Stuffed Nan Pockets" || itemName == "Indian Spiced Chicken") {
        rate = 110;
    }
    else if(itemName == "Crispy Corn Chaat" || itemName == "Barbecue Fish Tikka") {
        rate = 160;
    }
    else {
        rate = 75;
    }

    return rate;
}
function billdetails()
{
    var temp=document.createElement("div");
    var paybleAmount = 0;
    var discount = random();

    for(var i = 0; i < arr.length; i++) {
        paybleAmount = paybleAmount + Number(arr[i].itemQuantity * arr[i].itemRate);
    }
    var tips = paybleAmount * 0.05;
    var tax = paybleAmount * 0.15;

    paybleAmount = paybleAmount + tips + tax - (paybleAmount * discount);
    
    displayBill(paybleAmount , discount , tips , tax, itemDay);    console.log(item1);
    cart.appendChild(temp);
}
billbtn.addEventListener('click',billdetails);
