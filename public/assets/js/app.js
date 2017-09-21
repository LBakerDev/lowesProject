
$('.product-container').click(function(event) {
    event.preventDefault();
    //console.log(event)
    var product = $(event.currentTarget).data();
    var productPrice = "$" + parseFloat(product.price).toFixed(2);
    
    $('#selected-description').text(product.desc);
    var bullets = product.marketing.split('|');
    var marketingList = bullets.map(function(bullet) {
        return '<li>' + bullet + '<li>';
    });
    $('#selected-marketing').html(marketingList);
    $('#data-img').prop("src", product.img);
    $('#data-price').text(productPrice);
})

$('.cart-btn').click(function(product) {
    // let addCart = ("<p class='alert alert-success'>Added " + product.productPrice + " to your cart<p>");
    // $('.container').prepend(addCart);
    alert("Added " + $('#data-price').text() + " to your cart!");
})
