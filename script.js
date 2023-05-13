$(function () {

    var owner = $('#owner');
    var cardNumber = $('#cardNumber');
    var cardNumberField = $('#card-number-field');
    var CVV = $("#cvv");
    var mastercard = $("#mastercard");
    var confirmButton = $('#confirm-purchase');
    var visa = $("#visa");
    var amex = $("#amex");


    // Use the payform library to format and validate
    // the payment fields.

    cardNumber.payform('formatCardNumber');
    CVV.payform('formatCardCVC');


    cardNumber.keyup(function () {

        amex.removeClass('transparent');
        visa.removeClass('transparent');
        mastercard.removeClass('transparent');

        if ($.payform.validateCardNumber(cardNumber.val()) == false) {
            cardNumberField.addClass('has-error');
        } else {
            cardNumberField.removeClass('has-error');
            cardNumberField.addClass('has-success');
        }

        if ($.payform.parseCardType(cardNumber.val()) == 'visa') {
            mastercard.addClass('transparent');
            amex.addClass('transparent');
        } else if ($.payform.parseCardType(cardNumber.val()) == 'amex') {
            mastercard.addClass('transparent');
            visa.addClass('transparent');
        } else if ($.payform.parseCardType(cardNumber.val()) == 'mastercard') {
            amex.addClass('transparent');
            visa.addClass('transparent');
        }
    });



    confirmButton.click(function (e) {

        e.preventDefault();

        var isCardValid = $.payform.validateCardNumber(cardNumber.val());
        var isCvvValid = $.payform.validateCardCVC(CVV.val());

        if (owner.val().length < 5) {
            alert("Wrong owner name");
        } else if (!isCardValid) {
            alert("Wrong card number");
        } else if (!isCvvValid) {
            alert("Wrong CVV");
        } else {

            let card_pay = JSON.parse(localStorage.getItem("Card_payment_details")) ?? [];

            // e.preventDefault();

            let name = document.getElementById("owner").value;
            let cvv = document.getElementById("cvv").value;
            let number = document.getElementById("cardNumber").value;
            let month = document.getElementById("ex_month").value;
            let year = document.getElementById("ex_year").value;


            let card = {
                "owner": name,
                "cvv": cvv,
                "cardNumber": number,
                "ex_month": month,
                "ex_year": year
            };

            card_pay.push(card);

            localStorage.setItem("Card_payment_details", JSON.stringify(card_pay));


            mail();

            setTimeout(block,3000)
            function block() {
                document.querySelector(".container_order").style.display = "block";
                document.getElementById("order_img").style.display = "block";
            }

            setTimeout(note,8000)
            function note(){
                 document.querySelector(".container_order").style.display = "none";
                 document.getElementById("order_img").style.display = "none"; 
                 window.location.href = "../../index.html";      
            }


            // Everything is correct. Add your form submission code here.
            // alert("Everything is correct");

            // location.reload();
        }



    });
});

function mail(){
    let profile = JSON.parse(localStorage.getItem("profile_details"));

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "prasannabalajikm@gmail.com",
        Password: "0F71EB16C8ACE2FABC4039D1E1807604E919",
        To: profile["email"],
        From: "prasannabalajikm@gmail.com",
        Subject: "This is the subject",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );
}


