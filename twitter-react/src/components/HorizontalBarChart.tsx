import React from 'react';
import { Chart, ChartBar, ChartVoronoiContainer, } from '@patternfly/react-charts';

export const BarChart: React.FC<any> = (props) => (
  <div style={{ height: '250px', width: '600px' }}>
    <Chart
      ariaDesc="Average number of pets"
      ariaTitle="Bar chart example"
      containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}
      domainPadding={{ x: [30, 25] }}
    //   legendData={[{ name: 'Cats' }]}
      legendOrientation="vertical"
      legendPosition="right"
      height={250}
      padding={{
        bottom: 50,
        left: 50,
        right: 200, // Adjusted to accommodate legend
        top: 50
      }}
      width={600}
    >
      <ChartBar horizontal data={[{ name: 'Apple', x: 'Apple', y: props.appleCount || 0 }, { name: 'Microsoft', x: 'Microsoft', y: props.microsoftCount || 0 }]} />
    </Chart>
  </div>
)