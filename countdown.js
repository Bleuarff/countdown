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

    const display = `${d.months()} Mois ${d.days()} Jours ${d.hours()} Heures ${d.minutes()} Minutes ${d.seconds()} secondes`,
          asdays = d.as('days'),
          ashours = d.as('hours')

    const nd = document.getElementById('countdown')
    nd.innerText = display

    const ndd = document.getElementById('days')
    ndd.innerText = asdays.toFixed(0)

    const ndh = document.getElementById('hours')
    ndh.innerText = ashours.toFixed(0)

  }
}
