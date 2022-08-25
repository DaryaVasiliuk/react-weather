import React from 'react';


export const Time = () => {

  const [time, setTime] = React.useState<string>();

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toTimeString().split(' ')[0]);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (<span>{time}</span>);
}
