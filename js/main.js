$(document).ready(function () {

    let menuItems = $('.menu__list');
    let mainButton = $('.main__action');
    let productsButton = $('.btn.products__btn');
    let gift = $('.gift');

    document.getElementById('burger').onclick = function () {
        document.getElementById('menu').classList.add('open');
    }

    document.querySelectorAll('#menu').forEach((item) => {
        item.onclick = () => {
            document.getElementById('menu').classList.remove('open')
        }
    })

    menuItems.children().eq(0).click(() => {
        $('html, body').animate({
            scrollTop: $(".products__title").offset().top
        }, 1000);
    });

    menuItems.children().eq(1).click(() => {
        $('html, body').animate({
            scrollTop: $(".advantages__title").offset().top
        }, 1000);
    });

    menuItems.children().eq(2).click(() => {
        $('html, body').animate({
            scrollTop: $(".order__title").offset().top
        }, 1000);
    });

    mainButton.click(() => {
        $('html, body').animate({
            scrollTop: $(".products__title").offset().top
        }, 1000);
    });

    productsButton.click(() => {
        $('html, body').animate({
            scrollTop: $(".order__title").offset().top
        }, 1000);
    });

    gift.click(() => {
        $('html, body').animate({
            scrollTop: $(".order__title").offset().top
        }, 1000);
    });

    let loader = $('.loader');
    $('.btn.order__btn').click(function () {
        let productName = $('.input.order__input-select');
        let name = $('.input.order__input-name');
        let tel = $('.input.order__input-tel');
        let hasError = false;

        $('.error-input').hide();
        productName.css('border-color', '');
        name.css('border-color', '');
        tel.css('border-color', '');

        if (!productName.val().trim()) {
            productName.next().show();
            productName.css('border-color', 'red');
            hasError = true;
        }

        if (!name.val().trim()) {
            name.next().show();
            name.css('border-color', 'red');
            hasError = true;
        }

        if (!tel.val().trim()) {
            tel.next().show();
            tel.css('border-color', 'red');
            hasError = true;
        }

        let newForm = $('#new-form');
        if (!hasError) {
            loader.css('display', 'flex');
            // $.ajax({
            //     method: "POST",
            //     url: "http://testologia.site/checkout",
            //     data: {product: productName.val(), name: name.val(), phone: tel.val()}
            // })
            //     .done(function (message) {
                    loader.hide();
                    // if (message.success) {
                        $('.order__form').css('display', 'none');
                        newForm.css('display', 'flex');
                    // } else {
                    //     alert("Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ");
                    // }
                // });
        }
        $('.btn.new-form-btn').click(function () {
            newForm.css('display', 'none');
        });
    });

});
