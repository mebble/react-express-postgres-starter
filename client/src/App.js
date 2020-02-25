import React, { useState, useEffect } from 'react';

const App = () => {
    const [text, setText] = useState('Hi!');

    useEffect(() => {
        fetch('/api')
            .then(res => res.text())
            .then(text => {
                console.log(text);
            });
    }, []);

    return (
        <div>
            <input type="text" value={text} onChange={e => setText(e.target.value)} />
            <p>Reversed: {text.split('').reverse().join('')}</p>
        </div>
    );
};

export default App;
