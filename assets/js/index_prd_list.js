$(function(){
	// Show header productions
	loadListPrdHeader('#list-prd-1', 0, 2);
	loadListPrdHeader('#list-prd-2', 2, 4);
});

function loadListPrdHeader(idElm, start, end)
{
	console.log('Start Print Data for:', idElm);


	for (var i = start; i < end; i++)
	{
		var prd = productList[i];
		console.log(prd);
		var html = '<div class="line2">';
			html += '<div class="text-sp">';
				html += '<a href="#"><h4>' + prd.name + '</h4></a>';
					html += '<p>Common Good</p>';
				html += '<p>';
					html += '<img src="assets/images/star.png" alt="">';
					html += '<img src="assets/images/star.png" alt="">';
					html += '<img src="assets/images/star.png" alt="">';
					html += '<img src="assets/images/star.png" alt="">';
					html += '<img src="assets/images/star.png" alt="">';
				html += '</p>';
				html += '<div class="price">';
					html += '<h2>$'+prd.price+'</h2>';
				html += '</div>';
				html += '<div class="addtocart">';
					html += '<button type="button" class="btn btn-success" onclick="addToCard('+i+')">Add to cart</button>';
				html += '</div>';
			html += '</div>';
			html += '<div class="anhsp">';
				html += '<img src="'+prd.img+'" alt="">';
			html += '</div>';
		html += '</div>';
		$(idElm).append(html);
	}
}
