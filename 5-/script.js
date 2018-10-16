// Using absolute postion Reference, relative position ref

var masterT1 = new TimelineMax();
masterT1.to('#logo1', 1, {x:850})
        .to('#logo2', 1, {y:830}, '-=0.5')
        .to('#logo3', 1, {x:'-=850'}, '-=0.5');