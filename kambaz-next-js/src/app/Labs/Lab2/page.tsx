"use client";
import "./lab2.css";

export default function Lab2() {
  return (
    <div className="container mt-4">
      <h1>Lab 2: CSS, Box Model, Bootstrap</h1>

      <h2>Selectors & Colors</h2>
      <p>This is <span style={{color:"blue"}}>styled with an element selector</span> (should be blue).</p>
      <div className="example-class">This is styled with a class selector (should be green).</div>
      <p id="example-id">This is styled with an ID selector (should be purple & bold).</p>
      <div className="blue-on-yellow">Blue on yellow: class selector required by rubric.</div>
      <h3 className="blue-on-yellow-heading">Blue on yellow heading (class selector for headings, rubric-required)</h3>
      <p id="white-on-red">This is white text on a red background (ID, rubric-required)</p>
      <p id="black-on-yellow">Black on yellow using an ID (rubric-required)</p>

      <h2>Borders & Corners</h2>
      <div className="fat-red-border">Fat red border</div>
      <div className="fat-blue-border">Fat blue border</div>
      <div className="fat-yellow-border">Fat yellow border</div>
      <div className="thin-blue-dashed-border">Thin blue dashed border</div>
      <div className="border-solid rounded">Solid border + rounded (all corners)</div>
      <div className="border-double rounded-top">Double border + rounded top</div>
      <div className="border-inset rounded-left">Inset border + rounded left</div>
      <div className="border-outset rounded-right">Outset border + rounded right</div>

      <h2>Spacing & Box Model</h2>
      <div className="big-padding-above-left fat-blue-border">Big padding above/left, fat blue border</div>
      <div className="big-padding-bottom fat-red-border">Big padding bottom, fat red border</div>
      <div className="big-padding fat-yellow-border">Big padding all around, fat yellow border</div>
      <div className="margin-bottom border-solid">Big margin bottom</div>
      <div className="big-margin border-dashed">Big margin all around</div>
      <div className="centered border-double" style={{width: "200px"}}>Centered margin (auto)</div>

      <h2>Backgrounds</h2>
      <div className="bg-yellow">Yellow background</div>
      <div className="bg-blue">Blue background, white text</div>
      <div className="bg-green">Green background, white text</div>
      <div className="bg-image" style={{width:"200px", height:"100px"}}>Background Image Demo</div>

      <h2>Box Dimensions</h2>
      <div className="tall-yellow border-solid">Tall yellow box</div>
      <div className="wide-blue border-solid">Wide blue box</div>
      <div className="square-red border-solid">Square red box</div>
      
      <h2>Positioning</h2>
      <div style={{position:"relative", height:"220px"}}>
        <div className="relative-nudge border-solid">Relative nudge (yellow bg)</div>
        <div className="absolute-rect">Absolute pink rectangle</div>
        <div className="fixed-rect">Fixed blue rectangle</div>
        <div className="zindex-rect1">Z-index 2 (orange)</div>
        <div className="zindex-rect2">Z-index 1 (blue)</div>
      </div>
      <div style={{clear:"both"}}></div>
      <div className="float-right">Float right (yellow)</div>
      <div className="float-left">Float left (pink)</div>

      <h2>Flex & Grid Demos</h2>
      <div className="flex-row" style={{gap:"12px"}}>
        <div style={{background:"gray", color:"white", padding:"8px"}}>Flex 1</div>
        <div style={{background:"teal", color:"white", padding:"8px"}}>Flex 2</div>
      </div>
      <div className="flex-center" style={{height:"70px", background:"#eaeaea", margin:"10px 0"}}>
        <span>Flex Centered</span>
      </div>
      <div className="grid-demo" style={{margin:"12px 0"}}>
        <div style={{background:"blue", color:"white", padding:"8px"}}>Grid 1</div>
        <div style={{background:"orange", color:"white", padding:"8px"}}>Grid 2 (2x wide)</div>
      </div>

      <h2>Bootstrap Table and Custom Table</h2>
      <table className="table table-striped">
        <thead>
          <tr><th>Movie</th><th>Year</th></tr>
        </thead>
        <tbody>
          <tr><td>Inception</td><td>2010</td></tr>
          <tr><td>The Matrix</td><td>1999</td></tr>
        </tbody>
      </table>
      <table className="table-demo bg-yellow">
        <thead>
          <tr>
            <th>Book</th><th>Author</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><a href="https://en.wikipedia.org/wiki/1984_(novel)">1984</a></td><td>George Orwell</td></tr>
          <tr><td><a href="https://en.wikipedia.org/wiki/Dune_(novel)">Dune</a></td><td>Frank Herbert</td></tr>
        </tbody>
      </table>

      <h2>Bootstrap Inputs and Cards</h2>
      <div className="bootstrap-container">
        <input className="form-control mb-2" placeholder="Type here..." />
        <div className="card mt-2" style={{width: "14rem"}}>
          <div className="card-body">
            <h5 className="card-title">Bootstrap Card</h5>
            <p className="card-text">This card uses Bootstrap styles!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
