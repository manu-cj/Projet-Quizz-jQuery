
let button =$('.button');
let button2 =$('.button2');
score = 0;
button.click(function () {
    if ($('.good').is(':checked')) {
        console.log('is ok');
        button.parent('div').css('border-color', 'green');
        button.remove();
        $('#quest2').css('display', 'block');
        score++
        console.log(score)
    }
    else {
        $('#quest2').css('display', 'block');
    }
})

button2.click(function () {
    if ($('.good2').is(':checked')) {
        console.log('is ok');
        button2.parent('div').css('border-color', 'green');
        button2.remove();
        $('#quest3').css('display', 'block');
        score++
        console.log(score)
    }
    else {
        $('#quest3').css('display', 'block');
    }
})
