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
  const timestamps = priceData.map(entry => new Date(entry.timestamp * 1000));
  const underlyingApy = priceData.map(entry => 1 - entry.underlyingApy);
  const impliedApy = priceData.map(entry => 1 - entry.impliedApy);

  const trace1 = {
      x: timestamps,
      y: underlyingApy,
      type: 'scatter',
      mode: 'lines+markers',
      name: 'Underlying Zero Coupon Price',
      marker: { color: 'rgb(196, 232, 203)' }
  };

  const trace2 = {
      x: timestamps,
      y: impliedApy,
      type: 'scatter',
      mode: 'lines+markers',
      name: 'Implied Zero Coupon Price',
      marker: { color: 'rgb(181, 168, 68)' }
  };

  const layout = {
      title: 'Zero Coupon Prices (USDC)',
      xaxis: { title: 'Time' },
      yaxis: { 
        title: 'Zero Coupon Price',
        tickformat: '$,.2f'
    },
      plot_bgcolor: 'rgb(6, 5, 50)',
    paper_bgcolor: 'rgb(6, 5, 50)',
    font: {color: 'rgb(196, 232, 203)'}
  };

  return (
      <Plot
          data={[trace1, trace2]}
          layout={layout}
          style={{ width: '100%', height: 'auto' }}
      />
  );
};

export default TradingGraph;
