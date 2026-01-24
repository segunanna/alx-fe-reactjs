import { useState } from 'react';

function Counter() {
    // 1. Initialize state. 'count' holds the value, 'setCount' updates it.
    const [count, setCount] = useState(0);

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            {/* 2. Display the Current Count */}
            <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Current Count: {count}</p>

            {/* 3. Buttons with onClick handlers */}
            <button 
                onClick={() => setCount(count + 1)}
                style={{ padding: '8px 16px', margin: '5px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
                Increment
            </button>

            <button 
                onClick={() => setCount(count - 1)}
                style={{ padding: '8px 16px', margin: '5px', backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
                Decrement
            </button>

            <button 
                onClick={() => setCount(0)}
                style={{ padding: '8px 16px', margin: '5px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
                Reset
            </button>
        </div>
    );
}

export default Counter;