import Plot from 'react-plotly.js';
import { useState, useEffect } from 'react';
import Papa from 'papaparse';

const TradingGraph = () => {

    const [priceData, setPriceData] = useState(null)
    const [priceDataLoading, setPriceDataLoading] = useState(true)
    const [priceDataError, setPriceDataError] = useState(null)

    async function fetchPriceData() {
        try {
          const response = await fetch('https://api-v2.pendle.finance/core/v2/42161/markets/0x8621c587059357d6c669f72da3bfe1398fc0d0b5/apy-history?time_frame=hour&timestamp_start=2023-12-27T00:00:00.000Z&timestamp_end=2024-02-25T00:00:00.000Z');
          
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          
          const data = await response.json();
          const parsedData = Papa.parse(data.results, { header: true }).data;
          setPriceData(parsedData)
          setPriceDataLoading(false)
          console.log(data)
          return;
        } catch (error) {
            setPriceDataError(error)
            setPriceDataLoading(false);
            return;
        }
      }

      useEffect(() => {
        fetchPriceData()
      }, []);

    if(priceDataLoading){
        return <div className='loading'>Loading...</div>
    }

    if(priceDataError !== null){
        return <div className='loading'>There was a network error</div>
    }
    console.log(priceData.results)
  // Create the Plotly trace
  const timestamps = priceData.map(entry => new Date(entry.timestamp * 1000));
  const underlyingApy = priceData.map(entry => entry.underlyingApy);
  const impliedApy = priceData.map(entry => entry.impliedApy);

  const trace1 = {
      x: timestamps,
      y: underlyingApy,
      type: 'scatter',
      mode: 'lines+markers',
      name: 'Underlying APY',
      marker: { color: 'rgb(196, 232, 203)' }
  };

  const trace2 = {
      x: timestamps,
      y: impliedApy,
      type: 'scatter',
      mode: 'lines+markers',
      name: 'Implied APY',
      marker: { color: 'rgb(181, 168, 68)' }
  };

  const layout = {
      title: 'Price Time Series',
      xaxis: { title: 'Time' },
      yaxis: { 
        title: 'APY',
        tickformat: ',.2%',
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
