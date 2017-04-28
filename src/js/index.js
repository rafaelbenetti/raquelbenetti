let Index = (function () {
    'use strict';

    let config = function () {
        configSlider();
        configAutoSlider();
    };

    let configSlider = function () {
        let spans = Array.from(document.querySelectorAll('.header .slider-circle'));
        spans.forEach((element) => {
            element.onclick = (event) => nextImage(event, spans);
        });
    };

    let nextImage = function (event, spans) {
        spans.forEach((s) => s.classList.remove('active'));
        let target = event.target || event.srcElement;
        target.classList.add('active');

        document.querySelector('.header .header-slider:not(.hidden)').classList.add('hidden');
        Array.from(document.querySelectorAll('.header .header-slider'))[spans.indexOf(target)].classList.remove('hidden');
    };

    let configAutoSlider = function() {
        setInterval(() => {
            let spans = Array.from(document.querySelectorAll('.header .slider-circle'));
            let span = spans.filter((e) => e.classList.contains('active'))[0];
            let index = spans.indexOf(span);

            index++;
            if (index === spans.length)
                index = 0;
            
            spans[index].click();
        }, 
        10000);
    }; 

    return {
        config
    };
})();