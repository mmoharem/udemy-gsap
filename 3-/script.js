
// var shapeSq = document.querySelector('#logo1');
// var shSqLength = shapeSq.getTotalLength();
// console.log(shSqLength); //8688

// TweenMax.to('#logo1', 1, {x:850, y:830, ease:Power4.easeInOut});
// TweenMax.to('#logo1', 1, {x:850, y:830, ease:SteppedEase.config(20), y: 830});
// TweenMax.to('#logo1', 1, {x:850, y:830, ease:Bounce.easeOut, y: 830});
// TweenMax.to('#logo1', 2, {x:700, y:830, ease: Elastic.easeInOut.config(2, 0.5), y: 700});

// TweenMax.to('#logo1', 1, {x:850, ease:Power4.easeInOut});
// TweenMax.to('#logo1', 1, {y:830, delay:1, ease:Power4.easeInOut});
// TweenMax.to('#logo1', 1, {x:0, delay:2, ease:Power4.easeInOut});
// TweenMax.to('#logo1', 1, {y:0, delay:3, ease:Power4.easeInOut});

// TweenMax.from('#logo1', 1, {x:850, ease:Power4.easeInOut});

TweenLite.fromTo('#logo1', 2, 
    {autoAlpha:1, x:0, y:0},
    {autoAlpha:0, x:1000, y:0}
    );