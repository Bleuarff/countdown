'use strict'

class Countdown{

  constructor(target){
    this.target = new moment(target)

    setInterval(() => {this.update()}, 1000)
    this.update()
  }

  update(){
    const now = new moment(Date.now()),
          d = moment.duration(this.target.diff(now))

    const display = `${d.months()} Mois ${d.days()} Jours ${d.hours()} Heures ${d.minutes()} Minutes ${d.seconds()} secondes`
    // console.log(display)
    const nd = document.getElementById('countdown')
    nd.innerText = display

  }
}
