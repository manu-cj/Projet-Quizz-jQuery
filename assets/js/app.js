let good =$('.good')
score = 0;
$('button').click(function () {
    if (good.is(':checked')) {
        console.log('is ok');
       $('#quest1').css('border-color', 'green');
    }
})
