import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

root.render(<h1>Działa</h1>);

console.log('first')