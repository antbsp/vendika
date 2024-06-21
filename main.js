$(document).ready(function() {

    // Define height para as imagens dos produtos
    $(".catalog-item-image").each(function() {
        $(this).css("height", $(this).outerWidth(true)+"px");
    });

    // Scroll do slider
    $("#catalog-slider-next").click(function() {
        $(".catalog-slider").animate({
            scrollLeft: "+=200px"
        }, 500);
    });
    $("#catalog-slider-prev").click(function() {
        $(".catalog-slider").animate({
            scrollLeft: "-=200px"
        }, 500);
    });
});

// Expande texto da seção sobre
$(".section-text").click(function() {
    $(this).toggleClass("section-text-expand");
});

// Botão de compartilhamento do footer (só em HTTPS)
$(".footer-share").click(function() {
    const shareData = {
        title: "Nome do Catálogo",
        text: "Confira este catálogo",
        url: "https://x.com",
    };
    navigator.share(shareData);
});

// Abre barra de pesquisa
$(".navbar-search, .search-modal-background").click(function() {
    $(".search-modal").toggleClass("search-modal-visible");
    $(".search-modal-input").val("");
});

// Trigger no modal do produto
$(".catalog-item").click(function() {
    console.log($(this).attr("item-title")+" | "+$(this).attr("item-description")+" | "+$(this).attr("item-price")+" | "+$(this).attr("item-id"));
});

// Scroll no slider ao dar scroll no mouse
$('.catalog-slider').on('wheel', function(e){
    e.preventDefault();
    $(this).scrollLeft($(this).scrollLeft() + e.originalEvent.deltaY);
});

// Abre o modal do produto
$(".catalog-item, .product-modal-background, .product-modal-close").click(function() {
    $(".product-modal").toggleClass("product-modal-open");

    $(".product-modal-image").attr("src", $(this).attr("item-image"));
    $(".product-modal-title").text($(this).attr("item-title"));
    $(".product-modal-price").text($(this).attr("item-price"));
    $(".product-modal-description").text($(this).attr("item-description"));
    $(".product-modal-button").attr("href", "https://whatsapp.com/id?="+$(this).attr("item-id"));
});
