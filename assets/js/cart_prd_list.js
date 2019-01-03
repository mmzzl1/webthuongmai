$(function(){
	loadCartProductList();
});

// Print lai danh sach san pham da add to cart
function loadCartProductList()
{
	$('#cart-items tbody').html('');
	var cartItems = getCartItems();
	var newCartItem = [];
	$.each(cartItems, function(i, el){
	    if($.inArray(el, newCartItem) === -1)
	    {
	    	newCartItem.push(el);
	    }
	});
	// -- Tao ham dem so luong phan tu chung gia tri
	for (var i = 0; i < newCartItem.length; i++)
	{
		var idx = newCartItem[i];
		var prd = productList[idx];
		var total = countTotalItem(idx);
		var html = '<tr>';
		html += '<td>'
		html += '<img src="'+prd.img+'" />';
		html += '</td>';
		html += '<td>'
		html += prd.name;
		html += '</td>';
		html += '<td>'
		html += prd.price;
		html += '</td>';
		html += '<td>';
		html += total;
		html += '<button type="button" class="Set" onclick="inCartPageSetTotalItem('+idx+')">Set</button>';
		html += '</td>';
		html += '<td>'
		html += prd.price*total;
		html += '</td>';
		html += '<td>'
		html += '<a href="#" onclick="inCartPageDeleteItem('+idx+')">x</a>';
		html += '</td>';
		html += '</tr>';
		$('#cart-items tbody').append(html);
	}
}

function inCartPageDeleteItem(idx)
{
	deleteItem(idx);
	loadCartProductList();
}

function inCartPageSetTotalItem(idx)
{
	setTotalItem(idx);
	loadCartProductList();
}
