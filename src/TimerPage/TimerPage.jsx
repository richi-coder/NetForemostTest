import { useEffect, useState } from "react"

function Timer() {
    const [date, setDate] = useState({
        year: 0,
        month: 0,
        day: 0,
        hour: 0,
        minutes: 0, 
        seconds: 0
    });


    useEffect(() => {
        
        setInterval(() => {
            const time = new Date();
            setDate({
                year: time.getFullYear(),
                month: time.getMonth(),
                day: time.getDate(),
                hour: time.getHours(),
                minutes: time.getMinutes(),
                seconds: time.getSeconds()
            })
        }, 1000);
    }, [])
    

  return (
    <div className="flex flex-col items-center">
        <div className="text-3xl">Hora y fecha actual</div>
        {
            date ?
            <div className="flex flex-row w-full gap-x-5 text-xl">
                <div className="flex flex-col">
                    <div>
                        {date.day} /
                    </div>
                    <div>Day</div>
                </div>
                <div className="flex flex-col">
                    <div>
                        {date.month} /
                    </div>
                    <div>Month</div>
                </div>
                <div className="flex flex-col">
                    <div>
                        {date.year} /
                    </div>
                    <div>Year</div>
                </div>
                <div className="flex flex-col">
                    <div>
                        {date.hour} /
                    </div>
                    <div>Hour</div>
                </div>
                <div className="flex flex-col">
                    <div>
                        {date.minutes} /
                    </div>
                    <div>Minutes</div>
                </div>
                <div className="flex flex-col">
                    <div>
                        {date.seconds}
                    </div>
                    <div>Seconds</div>
                </div>
            </div> :
            null
        }
    </div>
  )
}

export default Timer