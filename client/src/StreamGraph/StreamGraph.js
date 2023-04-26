import { ResponsiveStream } from '@nivo/stream';
import React from 'react';
import { useEffect, useState } from 'react';

export function StreamGraph(data){

  const [Data, setData] = useState(data)

  useEffect(() => {
    if (data) {
      setData(data.data);
    }
  }, [data]);

    return(
      <ResponsiveStream
        borderWidth={10}
        data={Data}
        keys={['valence', 'danceability','acousticness', 'instrumentalness', 'speechiness', 'energy', 'liveness']}
        margin={{ top: 50, right: 110, bottom: 100, left: 10 }}
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={null}
        curve="catmullRom"
        offsetType='wiggle'
        colors={{ scheme: 'paired' }}
        fillOpacity={0.85}
        borderColor={{ theme: 'background' }}
        animate={true}
        legends={[
          {
              anchor: 'bottom-right',
              direction: 'column',
              translateX: 100,
              itemWidth: 80,
              itemHeight: 20,
              itemTextColor: '#999999',
              symbolSize: 12,
              symbolShape: 'circle',
              effects: [
                  {
                      on: 'hover',
                      style: {
                          itemTextColor: '#000000'
                      }
                  }
              ]
          }
      ]}
        

      />
    );
}