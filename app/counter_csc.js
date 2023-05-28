"use client;"

import React, {useState} from 'react';

export default function counter_csc() {
    const [count, setCount] = useState(0);

  return (
    <div>
        <p>You clicked {count} Times on Button.</p>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  )
}
