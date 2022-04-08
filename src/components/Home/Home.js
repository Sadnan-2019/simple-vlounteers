import React, { useState } from 'react';

const Home = () => {

          const [count,setCount] = useState(0)

          const ClickMe = ()=>{

                    const newCount= count + 1;
                    setCount(newCount)
          }
          return (
                    <div>
                         <h1>This is home</h1>
                         <h5>This is count:{count}</h5>
                         <h4>This is Double Count:{count * 2}</h4>
                         <h4>This is Double Six Count:{count * 6}</h4>
                         <button onClick={ClickMe}>Click me</button>     
                    </div>
          );
};

export default Home;