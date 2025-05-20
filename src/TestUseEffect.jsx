import {useEffect, useState} from 'react'
const TestUseEffect = () => {
  const [watch, setWatch] = useState();
  // const [num1, setNum1] = useState(1);
  // const [num2, setNum2] = useState(1);
  console.log("Page Loaded");
  useEffect(() => {
      setInterval(() => {
        setWatch(new Date().toLocaleTimeString());
      }, 1000);
    // console.log("Use State");
  }, []);

  return (
      <div>
        {/*<h2>Num1: {num1}</h2>*/}
        {/*<button onClick={() => setNum1(num1 + 1)}>Button 1</button>*/}
        {/*<h2>Num2: {num2}</h2>*/}
        {/*<button onClick={() => setNum2(num2 + 1)}>Button 2</button>*/}
        <h2>{watch}</h2>
      </div>
  );
};
export default TestUseEffect;