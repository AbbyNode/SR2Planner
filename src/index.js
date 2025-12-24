import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import SlimeRancher2Planner from "./SlimeRancher2Planner";

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
    <div className="box">
      <SlimeRancher2Planner />
    </div>
);
