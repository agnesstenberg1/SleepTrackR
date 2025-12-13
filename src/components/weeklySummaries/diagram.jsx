import { BarChart, Bar } from 'recharts';


//kolla om det är okej att använda recharts som bibliotek och ta denna
//komponent ifrån, om det är okej- ta bort inline css och gör egen fil
//kolla även hur man importerar data i diagramet från firebase, lägg sedan in denna komponent i weeklySum
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const TinyBarChart = () => {
  return (
    <BarChart
      style={{ width: '100%', maxWidth: '300px', maxHeight: '100px', aspectRatio: 1.618 }}
      responsive
      data={data}
    >
      <Bar dataKey="uv" fill="#8884d8" />
    </BarChart>
  );
};

export default TinyBarChart;


//förslag från ch

//import React from "react";
//import "./tinyBarChart.css";

//const data = [
  //{ name: 'Page A', uv: 4000 },
  //{ name: 'Page B', uv: 3000 },
  //{ name: 'Page C', uv: 2000 },
  //{ name: 'Page D', uv: 2780 },
  //{ name: 'Page E', uv: 1890 },
  //{ name: 'Page F', uv: 2390 },
  //{ name: 'Page G', uv: 3490 },
//];

//const TinyBarChart = () => {
  //const maxValue = Math.max(...data.map(d => d.uv));

  //return (
    //<div className="tiny-bar-chart">
      //{data.map((d, index) => (
        //<div key={index} className="bar-container">
          //<div
            //className="bar"
            //style={{ height: `${(d.uv / maxValue) * 100}%` }}
          //></div>
        //</div>
      //))}
    //</div>
  //);
//};

//export default TinyBarChart;