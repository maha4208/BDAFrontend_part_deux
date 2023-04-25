import { ResponsiveStream } from '@nivo/stream';
import React from 'react';

export function StreamGraph(data){
      let Data = data.data
      //console.log(Data)
          //   let averageMetricData = {
    //     'valence': props.valence,
    //     'danceability': props.danceability,
    //     'acousticness': props.acousticness,
    //     'instrumentalness':props.instrumentalness,
    //     'speechiness': props.peechiness,
    //     'energy': props.energy,
    //     'liveness': props.liveness
    // }
      return(
        <ResponsiveStream
          height={400}
          data={Data}
          keys={['valence', 'danceability','acousticness', 'instrumentalness', 'speechiness', 'energy', 'liveness']}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          axisTop={null}
          axisRight={null}
          axisBottom={null}
          axisLeft={null}
          curve="catmullRom"
          offsetType='wiggle'
          colors={{ scheme: 'paired' }}
          fillOpacity={0.85}
          borderColor={{ theme: 'background' }}
          //animate={true}
          motionStiffness={90}
          motionDamping={15}
        />
      );
  }