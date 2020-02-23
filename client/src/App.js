import React, { useState } from 'react';

const App = () => {
    const [text, setText] = useState('Hi!');
    return (
        <div>
            <input type="text" value={text} onChange={e => setText(e.target.value)} />
            <p>Reversed: {Array.from(text).reverse()}</p>
        </div>
    );
};

export default App;
