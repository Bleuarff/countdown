'use strict'

let target

function startCountdown(date){
  target = new moment(date)

  setInterval(update, 1000)
  update()
}

function update(){
  const now = new moment(Date.now()),
  d = moment.duration(target.diff(now))

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
