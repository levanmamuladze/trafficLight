import React from "react";
import TrafficLight from "./trafficlight.jsx";
export function Home() {
  return (
    <div>
      <div className="stick d-flex mx-auto" ></div>
      <div className="container ">
        <div className="d-flex justify-content-center">
          <TrafficLight />
        </div>
      </div>
      </div>
    
  );
}
export default Home;
