import { useState, useEffect } from "react";
import moment from "moment";

function App() {
  const blackStyle = {
    color: 'white'
  };

  const [hour, setHour] = useState('');
  const [hourNow, setHourNow] = useState(moment().format('h'));
  const [minuteNow, setMinuteNow] = useState(moment().format('mm'));
  const [pmOrAm, setPmOrAm] = useState(moment().format('a'));
  const [pastOrTo, setPastOrTo] = useState('past');
  const [remaining, setRemaining] = useState('five');
  const [oClock, setOClock] = useState(false)

  const updateMinuteTime = (minute, hour) => {
    var minuteInt = parseInt(minute);
    var hourInt = parseInt(hour)

    if (minuteInt >= 0 && minuteInt <= 4) {
      setPastOrTo('');
      setHour(hour);
    } else {
      if (minuteInt >= 35) {
        setPastOrTo('to');
        hourInt = hourInt + 1;
        setHour(hourInt.toString());
      } else {
        setPastOrTo('past');
        setHour(hour);
      }
    }
    
    if ((minuteInt >= 0 && minuteInt <= 4)) {
      setOClock(true);
      setRemaining('')
    }
    if ((minuteInt >= 5 && minuteInt <= 9) || (minuteInt >= 55 && minuteInt <= 59)) {
      setRemaining('five');
      setOClock(false);
    }
    if ((minuteInt >= 10 && minuteInt <= 14) || (minuteInt >= 50 && minuteInt <= 54))
      setRemaining('ten');
    if ((minuteInt >= 15 && minuteInt <= 19) || (minuteInt >= 45 && minuteInt <= 49))
      setRemaining('quarter');
    if ((minuteInt >= 20 && minuteInt <= 24) || (minuteInt >= 40 && minuteInt <= 44))
      setRemaining('twenty');
    if ((minuteInt >= 25 && minuteInt <= 29) || (minuteInt >= 35 && minuteInt <= 39))
      setRemaining('twenty-five');
    if ((minuteInt >= 30 && minuteInt <= 34))
      setRemaining('half');
  };

  useEffect(() => {
    
    updateMinuteTime(minuteNow, hourNow);
    setInterval(() => {
      setHourNow(moment().format('h'));
      setMinuteNow(moment().format('mm'));
      setPmOrAm(moment().format('a'))
      updateMinuteTime(minuteNow, hourNow);
      console.log(1);
    }, 60000)
  }, [hourNow, minuteNow, pmOrAm, updateMinuteTime]);

  return (
    <div className="App">
      <div className="box">
        <div className="row"> 
          <h1 className="it margin">IT</h1>
          <h1 className="margin">L</h1>
          <h1 className="is margin">IS</h1>
          <h1 className="margin">VTLXFT</h1>
          {/* <h1 className="margin" style={pmOrAm === 'am' ? blackStyle : {}}>AM</h1> 
              <h1 className="margin" style={pmOrAm === 'pm' ? blackStyle : {}}>PM</h1> */}
        </div>

        <div className="row">
          <h1 className='margin' style={remaining === 'quarter' ? blackStyle : {}}>A</h1>
          <h1 className="margin">D</h1>
          <h1 className='margin' style={remaining === 'quarter' ? blackStyle : {}}>QUARTER</h1>
          <h1 className="margin">CA</h1>
        </div>

        <div className="row">
          <h1 className='margin' style={remaining === 'twenty-five' || remaining === 'twenty' ? blackStyle : {}}>TWENTY</h1>
          <h1 className='margin' style={remaining === 'twenty-five' || remaining === 'five' ? blackStyle : {}}>FIVE</h1>
          <h1 className='margin'>X</h1>
        </div>

        <div className="row">
          <h1 className='margin' style={remaining === 'half' ? blackStyle : {}}>HALF</h1>
          <h1 className='margin'>B</h1>
          <h1 className='margin' style={remaining === 'ten' ? blackStyle : {}}>TEN</h1>
          <h1 className='margin'>F</h1>
          <h1 className='margin' style={pastOrTo === 'to' ? blackStyle : {}}>TO</h1>
        </div>

        <div className="row">
          <h1 className='margin' style={pastOrTo === 'past' ? blackStyle : {}}>PAST</h1>
          <h1 className='margin'>ERU</h1>
          <h1 className='margin' style={hour === '9' ? blackStyle : {}}>NINE</h1>
        </div>

        <div className="row">
          <h1 className='margin' style={hour === '1' ? blackStyle : {}}>ONE</h1>
          <h1 className='margin' style={hour === '6' ? blackStyle : {}}>SIX</h1>
          <h1 className='margin' style={hour === '3' ? blackStyle : {}}>THREE</h1>
        </div>
        
        <div className="row">
          <h1 className='margin' style={hour === '4' ? blackStyle : {}}>FOUR</h1>
          <h1 className='margin' style={hour === '5' ? blackStyle : {}}>FIVE</h1>
          <h1 className='margin' style={hour === '2' ? blackStyle : {}}>TWO</h1>
        </div>

        <div className="row">
          <h1 className='margin' style={hour === '8' ? blackStyle : {}}>EIGHT</h1>
          <h1 className='margin' style={hour === '11' ? blackStyle : {}}>ELEVEN</h1>
        </div>

        <div className="row">
          <h1 className='margin' style={hour === '7' ? blackStyle : {}}>SEVEN</h1>
          <h1 className='margin' style={hour === '12' ? blackStyle : {}}>TWELVE</h1>
        </div>

        <div className="row">
          <h1 className='margin' style={hour === '10' ? blackStyle : {}}>TEN</h1>
          <h1 className='margin'>V</h1>
          <h1 className='margin' style={oClock ? blackStyle : {}}>O`CLOCK</h1>
        </div>
      </div>
      <div>
        <h3 className='signature'>Made by Vlad Tiganila, @vladtzy.</h3>
      </div>
    </div>
  );
}

export default App;
