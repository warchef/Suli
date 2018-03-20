/*
 * 2014 NETGATE Technologies s.r.o.
 *
 * NOTICE OF LICENSE
 *
 * This product is licensed for one customer to use on one domain. Site developer has the
 * right to modify this module to suit their needs, but can not redistribute the module in
 * whole or in part. Any other use of this module constitues a violation of the user agreement.
 *
 *  @author NETGATE Technologies s.r.o. <support@netgate.sk>
 *  @copyright  2014 NETGATE Technologies s.r.o.
 *  @license    Commercial
 */
// Override/Redirect Checkout Button
E(function () {
//
//       E('#loginBtn').fancybox({
//            maxWidth: 500
//        });
//  console.log( 'initEasyPay' );

//    E('form#login_form').submit(function (e) {
//        e.preventDefault();
//        var data = $(this).serialize();
//        $.ajax({
//            type: "POST",
//            url: "http://mywiwe.com/login",
//            data: data,
//            success: function (html) {
//                console.log(html);
//            },
//            error: function () {
//                alert('error');
//            }
//        });
//    });

    E("a").each(function () {

        var href = E(this).attr('href');
        if (null != href) {
//if ( (href.indexOf(easypayorderstepurl)!=-1) )
            if (href == easypayorderstepurl) {
                E(this).attr('href', easypaypaymenturl);
                //var newCheckoutText = E(this).text().replace( E(this).text().trim(), easypaytextCheckout );
                //E(this).text(newCheckoutText);
//                E(this).text(easypaytextCheckout);
            }

            if (easypayskipcart) {
//if ( (href.indexOf(easypayorderorderurl)!=-1) )
                if (href == easypayorderorderurl) {
                    E(this).attr('href', easypaypaymenturl);
                    //var noTags = E(this).text().replace(/<[^>]*>/g, "");
                    //E(this).text(easypaytextCheckout);
                }
            }

        }
    })
    //

    E("button").each(function () {

        var href = E(this).attr('onclick');
        if (null != href) {
            if ((href.indexOf(easypayorderstepurl) != -1)) {
                E(this).attr('onclick', "window.location='" + easypaypaymenturl + "';");
            }
        }
    })

    if (E('#cart-buttons #button_order_cart').length > 0) {
        E('#cart-buttons #button_order_cart').attr('href', baseDir + 'modules/easypay/easypay-order.php');
    }

    if (E('.btn .CheckOut').length > 0) {
        E('.btn .CheckOut').attr('href', baseDir + 'modules/easypay/easypay-order.php');
    }


    if (E('#order_step').length) {
        E('#order_step').hide();
    }

    if (E('#order_steps').length) {
        E('#order_steps').hide();
    }

//
    E('#company').keyup(function () {
        vat_number();
    });
    vat_number();
    function vat_number()
    {
//        if (E('#company').val() != '') {
//            E('#company_block').show();
//        } else {
//            E('#company_block').hide();
//        }
    }
//


//
    E('#company_invoice').keyup(function () {
        vat_number_invoice();
    });
    vat_number_invoice();
    function vat_number_invoice()
    {
//        if (E('#company_invoice').val() != '') {
//            E('#company_block_invoice').show();
//        } else {
//            E('#company_block_invoice').hide();
//        }
    }
//


//
    E('#different_invoice').click(function () {
        set_different_invoice();
    });
    set_different_invoice();
    function set_different_invoice()
    {
        if (parseInt(E("#different_invoice:checked").val()) == 1) {
            E('#invoice_block').show();
        } else {
            E('#invoice_block').hide();
        }
    }
//


});

