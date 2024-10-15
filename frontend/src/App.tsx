import { useEffect, useState } from 'react'

import './App.css'
import { quicksort, type QuickSortState } from '../quicksort.ts'

const unsortedArray = [4, 3, 5, 9, 10, 44, 1, 2]
const history: QuickSortState[] = []
const sortedArray = quicksort(unsortedArray, (state) => {
  history.push(state)
})

function App() {
  const [sortHistory, setSortHistory] = useState<QuickSortState[]>([])


  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < history.length) {
        setSortHistory(prev => [...prev, history[index]]);
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div>
        <h3>Unsorted Array:</h3>
        <div style={{ display: 'flex', gap: '8px' }}>
          {unsortedArray.map((num, index) => (
            <div key={index} style={{ border: '1px solid #ccc', padding: '4px 8px' }}>
              {num}
            </div>
          ))}
        </div>
      </div>

      <h3>Sorting Steps:</h3>
      {sortHistory.map((step, stepIndex) => (
        <div key={stepIndex}>
          <div style={{ display: 'flex', gap: '16px', marginBottom: '8px' }}>
            <div>
              <strong>Left:</strong>
              <div style={{ display: 'flex', gap: '8px' }}>
                {step.left.map((num, index) => (
                  <div key={index} style={{ border: '1px solid #ccc', padding: '4px 8px', background: '#e6f7ff' }}>
                    {num}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <strong>Pivot:</strong>
              <div style={{ border: '1px solid #ccc', padding: '4px 8px', background: '#ffe7ba' }}>
                {step.pivotValue}
              </div>
            </div>
            <div>
              <strong>Right:</strong>
              <div style={{ display: 'flex', gap: '8px' }}>
                {step.right.map((num, index) => (
                  <div key={index} style={{ border: '1px solid #ccc', padding: '4px 8px', background: '#fff1f0' }}>
                    {num}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {stepIndex < sortHistory.length - 1 && <hr />}
        </div>
      ))}

      <div>
        <h3>Sorted Array:</h3>
        <div style={{ display: 'flex', gap: '8px' }}>
          {sortedArray.map((num, index) => (
            <div key={index} style={{ border: '1px solid #ccc', padding: '4px 8px' }}>
              {num}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
