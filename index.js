var addbtn = document.getElementById("add");
var billbtn = document.getElementById("bill");

var item = document.getElementById("item");
var quantity = document.getElementById("quantity");
var waitstaff = document.getElementById("waitstaff");
var tip = document.getElementById("tip");
var cart = document.getElementById("cart");
var day = document.getElementById("day");
var output = document.getElementById("output");

var discountOnDay = {
  MONDAY: 10,
  TUESDAY: 6,
  WEDNESDAY: 14,
  THURSDAY: 9,
  FRIDAY: 12,
  SATURDAY: 8,
  SUNDAY: 18,
};

var arr = [];

function addetails() {
  var temp = document.createElement("div");
  var rate = rateCard(item.value);
  temp.innerHTML =
    "Cost: " +
    rate +
    ",  Item: " +
    item.value +
    ",  Quantity: " +
    quantity.value +
    ",  Waitstaff: " +
    waitstaff.value +
    ",  Tip: " +
    tip.value;
  arr.push({
    rate: rate,
    item: item.value,
    quantity: quantity.value,
    waitstaff: waitstaff.value,
    tip: tip.value,
  });
  cart.appendChild(temp);
}

addbtn.addEventListener("click", addetails);

function rateCard(itemName) {
  var rate = 0;
  if (
    itemName == "Bhunne Besan Ka Murgh Tikka " ||
    itemName == "Paneer Afghani"
  ) {
    rate = 75;
  } else if (
    itemName == "Mutton Shashlik" ||
    itemName == "Lahori Raseelay " ||
    itemName == "Dahi Vada"
  ) {
    rate = 90;
  } else if (itemName == "Fried Chicken Momo" || itemName == "Nargisi Kofta") {
    rate = 100;
  } else if (
    itemName == "Stuffed Nan Pockets" ||
    itemName == "Indian Spiced Chicken"
  ) {
    rate = 110;
  } else if (
    itemName == "Crispy Corn Chaat" ||
    itemName == "Barbecue Fish Tikka"
  ) {
    rate = 160;
  } else {
    rate = 80;
  }

  return rate;
}

function billdetails() {
  var paybleAmount = 0;
  var currentDay = day.value;
  var discount = discountOnDay[currentDay];

  arr.forEach(function (item) {
    paybleAmount += Number(item.quantity * item.rate);
  });
  var tips = paybleAmount * (arr[0].tip / 1000);
  var tax = paybleAmount * 0.15;

  paybleAmount += tips + tax - (paybleAmount * discount) / 100;

  displayBill(paybleAmount, discount, tips, tax);
}

billbtn.addEventListener("click", billdetails);

function displayBill(paybleAmount, discount, tips, tax) {
  var div = document.createElement("div");
  div.innerHTML =
    " Discount (in %) : " +
    discount +
    "<br> Tips : " +
    tips +
    "<br> Tax : " +
    tax +
    "<br> Total Amount to Pay : " +
    paybleAmount;
  output.appendChild(div);
}
