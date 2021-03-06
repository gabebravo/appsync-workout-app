import React from 'react'
import HighchartsReact from './HighchartsReact';

const Chart = ({ options, highcharts }) => 
<HighchartsReact
  highcharts={highcharts}
  constructorType={'chart'}
  options={options}
/>

export default Chart