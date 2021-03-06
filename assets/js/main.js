// Them san pham co index = prdIdx (product_list.js)
function addToCard(prdIdx)
{
	console.log(typeof(prdIdx));
	var prd = productList[prdIdx];
	
	var cartItems = getCartItems();
	cartItems.push(prdIdx);
	console.log(cartItems);
	setCookie(cartProductListCookieName, JSON.stringify(cartItems));

	updateCart();
}

// Dem so san pham co id=idx trong cart
function countTotalItem(idx)
{
  var cartItems = getCartItems();
  var total = 0;
  $.each(cartItems, function(i, el){
      if(el === idx)
      {
        total++;
      }
  });
  return total;
}

// Đọc toàn bộ sản phẩm đã add to cart lưu trong cookie (string) ra mảng javascript
function getCartItems()
{
  var listPrdArr = [];
  try 
  {
    listPrdArr = JSON.parse(getCookie(cartProductListCookieName));
  }
  catch(e)
  {
    listPrdArr = [];
  }
  return listPrdArr;
}


function deleteItem(idx)
{
  var cartItems = getCartItems();

  // 
  var idxOf = cartItems.indexOf(idx);
  while (idxOf !== -1)
  {
    cartItems.splice(idxOf, 1);

    idxOf = cartItems.indexOf(idx);
  }
  
  
  setCookie(cartProductListCookieName, JSON.stringify(cartItems));

  updateCart();
}


function setTotalItem(idx)
{
  var total = prompt('Nhap so luong:', countTotalItem(idx));
  updateCart();
}


function updateCart()
{
  var cartItems = getCartItems();
  console.log(cartItems);
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