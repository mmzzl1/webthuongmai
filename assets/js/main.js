// Them san pham co index = prdIdx (product_list.js)
function addToCard(prdIdx)
{
	var prd = productList[prdIdx];
	
	var cartItems = getCartItems();
	cartItems.push(prdIdx);
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
  // Đọc giá trị đã lưu trong cookie ra chuỗi (string)
  var listPrdStr = getCookie(cartProductListCookieName);

  // Nếu có (length > 0) -> (true) thì sẽ chuyển chuỗi trên thành javascript 's array, nếu ko thì mảng trống
  return listPrdStr.length ? JSON.parse(listPrdStr) : [];
}

// Xoa tat ca cac phan tu trong cart co gia tri la 'idx'
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
  
  // JSON.stringify : chuyển mảng javascript sang chuỗi (string) để có thể lưu vào cookie
  setCookie(cartProductListCookieName, JSON.stringify(cartItems));

  updateCart();
}

// Set tổng số sản phẩm muốn mua cho 1 sp
function setTotalItem(idx)
{
  var total = prompt('Nhap so luong:', countTotalItem(idx));
  updateCart();
}

// Cập nhật lại số lượng sp trong giỏ hàng
function updateCart()
{
  var cartItems = getCartItems();
	$('.giohang-num').text(cartItems.length+' item' + ((cartItems.length>1) ? 's':''));
}

// W3 school hân hạnh tài trợ
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