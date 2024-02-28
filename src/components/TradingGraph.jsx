import Plot from 'react-plotly.js';
import { useState, useEffect } from 'react';

const TradingGraph = ({priceData, priceDataLoading, priceDataError}) => {

    
    if(priceDataLoading){
        return <div className='loading'>Loading...</div>
    }

    if(priceDataError !== null){
        return <div className='loading'>There was a network error</div>
    }
  // Create the Plotly trace
  const time = priceData.map(entry => new Date(entry.time));
  const open = priceData.map(entry => entry.open);
  const high = priceData.map(entry => entry.high);
  const low = priceData.map(entry => entry.low);
  const close = priceData.map(entry => entry.close);
  const volume = priceData.map(entry => entry.volume);

  const trace = {
    x: time,
    close: close,
    decreasing: {line: {color: 'rgb(181, 168, 68)'}},
    high: high,
    increasing: {line: {color: 'rgb(196, 232, 203)'}},
    line: {color: 'rgb(196, 232, 203)'},
    low: low,
    open: open,
    type: 'candlestick',
    xaxis: 'x',
    yaxis: 'y',
    autorange: true

  };
  const traceVolume = {
    x: time,
    y: volume,
    type: 'bar',
    xaxis: 'x',
    yaxis: 'y2',
    marker: {
        color: 'rgb(196, 232, 203)', // Bar color
    },
    autorange: true,
};

  let data = [trace, traceVolume]

  let layout = {
    title: 'Zero Coupon Prices',
    xaxis: {
      autorange: true,
      rangeslider: {visible: true},
      type: 'date'
    },
    yaxis: {
      autorange: true,
      type: 'linear',
      tickformat: '$,.3f',
    },
    yaxis2: {
      autorange: true,
      type: 'linear',
      tickformat: ',d',
      overlaying: 'y',
      side: 'right',
      title: 'Volume'
    },
    font: {
        family: 'Roboto',
        color: 'rgb(196, 232, 203)' // Font color
      },
      plot_bgcolor: 'rgb(6, 5, 50)', // Background color
      paper_bgcolor: 'rgb(6, 5, 50)' // Paper color (plot area)
  };

  return (
      <Plot
          data={data}
          layout={layout}
          style={{ width: '100%', height: 'auto' }}
      />
  );
};

export default TradingGraph;
