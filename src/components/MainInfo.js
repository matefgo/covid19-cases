import React, { useState } from 'react';
import Principal from './Principal';
import Info from './Info';
import Data from './Data';
import Etc from './Etc';
import '@fortawesome/fontawesome-free/js/all';

export default function MainInfo({ data }) {
  const [mouseIn, setMouseIn] = useState(false);
  const [currentDiv, setCurrentDiv] = useState('principal');

  const onlyCases = data
    .map(({ cases, deaths, refuses, suspects }) => {
      return {
        cases,
        deaths,
        refuses,
        suspects,
      };
    })
    .reduce((acc, curr) => {
      acc.cases += curr.cases;
      acc.deaths += curr.deaths;
      acc.refuses += curr.refuses;
      acc.suspects += curr.suspects;
      return acc;
    });

  const handleMouseEvent = (event, divId) => {
    if (event.type === 'mouseenter') {
      setMouseIn(true);
    } else if (event.type === 'mouseleave') {
      // setMouseIn(false);
    } else if (event.type === 'click') {
      setCurrentDiv(divId);
    }
  };

  return (
    <div
      className="h-100 row"
      onMouseEnter={handleMouseEvent}
      onMouseLeave={handleMouseEvent}
    >
      <Principal
        mouseIn={mouseIn}
        currentDiv={currentDiv}
        mouseEvent={handleMouseEvent}
      />
      <Info
        mouseIn={mouseIn}
        currentDiv={currentDiv}
        mouseEvent={handleMouseEvent}
        data={onlyCases}
      />
      <Data
        mouseIn={mouseIn}
        currentDiv={currentDiv}
        mouseEvent={handleMouseEvent}
      />
      <Etc
        mouseIn={mouseIn}
        currentDiv={currentDiv}
        mouseEvent={handleMouseEvent}
      />
    </div>
  );
}
