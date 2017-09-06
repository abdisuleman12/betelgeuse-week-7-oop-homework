

class Tv {
    constructor(color, cost) {
        this.color = color;
        this.cost = cost;
        this.tvVolumeOnStandBy = 0;
    }

    turnTvVolumeUp(volumeIncrease) {
        if(tvVolumeOnStandBy = 0) {
            // trying to figure out a way to increase the volume here
        }
        console.log('The Tv volume has increased by', volumeIncrease, '!')
    }
} // end of turn tv on method 

 // end of tv class 

let AbdisTv = new Tv('black', 450);

console.log(' abdis tv ', AbdisTv)

AbdisTv.turnTvVolumeUp(20);
