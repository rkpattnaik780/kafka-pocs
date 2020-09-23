import React, { useState, useEffect } from "react";

import { SimpleBarChart, PieChart } from "@carbon/charts";

import socketIOClient from 'socket.io-client';

export const StoryContent = () => {

  const [counts, setCounts] = useState({ microsoftCount: 0, appleCount: 0 });

  let socket = socketIOClient("http://localhost:8080/");

  useEffect(() => {
    socket.on('tweet_received', function (msg) {
      setCounts({
        microsoftCount: msg.microsoftCount,
        appleCount: msg.appleCount
      })
    });
  }, []);

  const options = {
    "title": "Simple horizontal bar (centered legend)",
    "axes": {
      "left": {
        "mapsTo": "group",
        "scaleType": "labels"
      },
      "bottom": {
        "mapsTo": "value"
      }
    },
    "legend": {
      "alignment": "center"
    },
    "height": "400px"
  };

  const data = [
    {
      "group": "Microsoft",
      "value": counts.microsoftCount
    },
    {
      "group": "Apple",
      "value": counts.appleCount
    }
  ];

  const pieChartOptions = {
    "title": "Pie (centered)",
    "resizable": true,
    "legend": {
      "alignment": "center"
    },
    "pie": {
      "alignment": "center"
    },
    "height": "400px"
  };

  const pieData = [
    {
      "group": "2V2N 9KYPM version 1",
      "value": 20000
    },
    {
      "group": "L22I P66EP L22I P66EP L22I P66EP",
      "value": 65000
    },
    {
      "group": "JQAI 2M4L1",
      "value": 75000
    },
    {
      "group": "J9DZ F37AP",
      "value": 1200
    },
    {
      "group": "YEL48 Q6XK YEL48",
      "value": 10000
    },
    {
      "group": "Misc",
      "value": 25000
    }
  ];

  useEffect(() => {
    const chartHolder = document.getElementById("bar-chart");
    new SimpleBarChart(chartHolder, {
      data,
      options
    });

    // const pieChartHolder = document.getElementById("pie-chart");
    // new PieChart(pieChartHolder, {
    //   pieData,
    //   // pieChartOptions
    // });
  }, [data, options])

  const content = (
    <div className="bx--grid">
      <div className="bx--row">
        <section className="bx--offset-lg-3 bx--col-lg-13" style={{ marginTop: "70px" }}>

          <p style={{ lineHeight: "20px" }}>
            The shell is perhaps the most crucial piece of any UI built with
            Carbon. It contains the shared navigation framework for the entire
            design system and ties the products in IBM’s portfolio together in a
            cohesive and elegant way. The shell is the home of the topmost
            navigation, where users can quickly and dependably gain their
            bearings and move between pages.
            <br />
            <br />
            The shell was designed with maximum flexibility built in, to serve
            the needs of a broad range of products and users. Adopting the shell
            ensures compliance with IBM design standards, simplifies development
            efforts, and provides great user experiences. All IBM products built
            with Carbon are required to use the shell’s header.
            <br />
            <br />
            To better understand the purpose and function of the UI shell,
            consider the “shell” of MacOS, which contains the Apple menu,
            top-level navigation, and universal, OS-level controls at the top of
            the screen, as well as a universal dock along the bottom or side of
            the screen. The Carbon UI shell is roughly analogous in function to
            these parts of the Mac UI. For example, the app switcher portion of
            the shell can be compared to the dock in MacOS.
          </p>
          <h2
            style={{
              fontWeight: "800",
              margin: "30px 30px",
              fontSize: "20px"
            }}
          >
            Header responsive behavior
          </h2>
          <p style={{ lineHeight: "20px" }}>
            As a header scales down to fit smaller screen sizes, headers with
            persistent side nav menus should have the side nav collapse into
            “hamburger” menu. See the example to better understand responsive
            behavior of the header.
          </p>
          <h2
            style={{
              fontWeight: "800",
              margin: "30px 0",
              fontSize: "20px"
            }}
          >
            Secondary navigation
          </h2>
          <p style={{ lineHeight: "20px" }}>
            The side-nav contains secondary navigation and fits below the
            header. It can be configured to be either fixed-width or flexible,
            with only one level of nested items allowed. Both links and category
            lists can be used in the side-nav and may be mixed together. There
            are several configurations of the side-nav, but only one
            configuration should be used per product section. If tabs are needed
            on a page when using a side-nav, then the tabs are secondary in
            hierarchy to the side-nav.
          </p>
          <div id="bar-chart" />
          <div id="pie-chart" />
        </section>
      </div>
    </div>
  );

  return content;
}