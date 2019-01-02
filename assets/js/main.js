
function addToCard(prdIdx)
{
	var prd = productList[prdIdx];
	console.log('Clicked index:', prdIdx, prd);
	
	var cartItems = getCartItems();
	cartItems.push(prdIdx);
	console.log(cartItems);
	setCookie(cartProductListCookieName, JSON.stringify(cartItems));

	updateCart();
}

function getCartItems()
{
  var listPrdStr = getCookie(cartProductListCookieName);
  return listPrdStr.length ? JSON.parse(listPrdStr) : [];
}

function updateCart()
{
  var cartItems = getCartItems();
	$('.giohang-num').text(cartItems.length+' item' + ((cartItems.length>1) ? 's':''));
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
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