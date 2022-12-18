import React from 'react'
import british from './british.png'
import wizzair from './wizzair.png'
import lufthansa from './lufthansa.png'
import trip from './trip.png'
import kiwi from './kiwi.png'
import cheapFly from './cheapFly.png'

export default function AgentIcons({name}) {
  const names = {
    'British Airways': british,
    'Wizzair.com': wizzair,
    'Lufthansa': lufthansa,
    'Trip.com': trip,
    'Kiwi.com': kiwi,
    'CheapFligths': cheapFly
  }
  const ids = {
    'WZ': wizzair,
    'BA': british,
    'LH': lufthansa,
  }
  return <img src={names[name] || ids[name]}/>
}
