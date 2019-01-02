$(function(){
	loadCartProductList();
});

function loadCartProductList()
{
	var cartItems = getCartItems();
	for (var i = 0; i < cartItems.length; i++)
	{
		var idx = cartItems[i];
		var prd = productList[idx];
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
		html += '<td>'
		html += 1;
		html += '</td>';
		html += '<td>'
		html += prd.price;
		html += '</td>';
		html += '</tr>';
		$('#cart-items tbody').append(html);
	}
}
