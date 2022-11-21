import { useState } from 'react';
import { WidthProvider, Responsive } from 'react-grid-layout';
import { data } from '../../data/data';
import { Layout, MiddleLayout, InnerLayout } from '../../types/layout';
import { AreaChartComp } from '../AreaChart';
import { BarChartComp } from '../BarChart';
import { LineChartComp } from '../LineChart';
import { PieChartComp } from '../PieChart';
import { StackedBarChartComp } from '../StackedBarChart';
import './BasicLayout.scss';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const getFromLS = (key: string) => {
  let ls: Layout = {};

  const value = global.localStorage.getItem('rgl-8') || '';

  try {
    ls = JSON.parse(value);
  } catch (e) {
    /*Ignore*/
  }

  return ls[key];
};

const saveToLS = (key: string, value: MiddleLayout) => {
  if (global.localStorage) {
    global.localStorage.setItem(
      'rgl-8',
      JSON.stringify({
        [key]: value,
      }),
    );
  }
};

const originalLayouts = getFromLS('layouts') || {};

const BasicLayout = () => {
  const [layouts, setLayouts] = useState(
    JSON.parse(JSON.stringify(originalLayouts)),
  );

  const resetLayout = () => {
    setLayouts({});
  };

  const onLayoutChange = (_layout: InnerLayout[], layouts: MiddleLayout) => {
    saveToLS('layouts', layouts);
    setLayouts(layouts);
  };

  return (
    <>
      <button className="button" onClick={() => resetLayout()}>
        Reset Layout
      </button>
      <ResponsiveReactGridLayout
        className="layout"
        rowHeight={30}
        layouts={layouts}
        onLayoutChange={(layout, layouts) => onLayoutChange(layout, layouts)}
      >
        <div key="1" data-grid={{ w: 4, h: 8, x: 0, y: 0, minW: 2, minH: 8 }}>
          <LineChartComp data={data} />
        </div>
        <div key="2" data-grid={{ w: 4, h: 8, x: 4, y: 0, minW: 2, minH: 8 }}>
          <AreaChartComp data={data} />
        </div>
        <div key="3" data-grid={{ w: 4, h: 8, x: 8, y: 0, minW: 2, minH: 8 }}>
          <BarChartComp data={data} />
        </div>
        <div key="4" data-grid={{ w: 4, h: 8, x: 0, y: 1, minW: 2, minH: 8 }}>
          <StackedBarChartComp data={data} />
        </div>
        <div key="5" data-grid={{ w: 4, h: 8, x: 4, y: 1, minW: 2, minH: 8 }}>
          <PieChartComp data={data} />
        </div>
      </ResponsiveReactGridLayout>
    </>
  );
};

export default BasicLayout;
