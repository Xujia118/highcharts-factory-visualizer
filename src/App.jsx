import React from 'react'
import VisualizationFactory from './VisualizerFactory';

function App() {
  return (
    <div>
      <VisualizationFactory
        type="line"
        title="Monthly Sales"
        data={[
          {
            name: "Product A",
            data: [
              ["Jan", 120],
              ["Feb", 135],
              ["Mar", 148],
            ],
          },
          {
            name: "Product B",
            data: [
              ["Jan", 85],
              ["Feb", 92],
              ["Mar", 110],
            ],
          },
        ]}
        options={{
          yAxis: { title: { text: "Revenue ($)" } },
        }}
      />

      <VisualizationFactory
        type="pie"
        title="Market Share"
        data={[
          { name: "Chrome", y: 65 },
          { name: "Safari", y: 15 },
          { name: "Firefox", y: 10 },
          { name: "Edge", y: 8 },
        ]}
      />

      <VisualizationFactory
        type="table"
        title="User Data"
        data={[
          { id: 1, name: "John", email: "john@example.com", role: "Admin" },
          { id: 2, name: "Sarah", email: "sarah@example.com", role: "User" },
          { id: 3, name: "Mike", email: "mike@example.com", role: "Editor" },
        ]}
      />
    </div>
  );
}

export default App