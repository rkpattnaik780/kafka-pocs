import React from 'react';
import { ChartPie } from '@patternfly/react-charts';

export const PieChart:React.FC<any> = (props) => (
  <div style={{ height: '230px', width: '350px' }}>
    <ChartPie
      ariaDesc="Average number of pets"
      ariaTitle="Pie chart example"
      constrainToVisibleArea={true}
      data={[{ x: 'Microsoft', y: props.microsoftCount }, { x: 'Apple', y: props.appleCount }]}
      height={230}
      labels={({ datum }) => `${datum.x}: ${datum.y}`}
      legendData={[{ name: 'Microsoft' }, { name: 'Apple' }]}
      legendOrientation="vertical"
      legendPosition="right"
      padding={{
        bottom: 20,
        left: 20,
        right: 140, // Adjusted to accommodate legend
        top: 20
      }}
      width={350}
    />
  </div>
)