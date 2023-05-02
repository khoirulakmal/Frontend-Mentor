import React from 'react'
import { createRoot } from 'react-dom/client';
import AgeCalculator from './AgeCalculator'
import './assets/css/age.css'

const root = createRoot(document.getElementById('root'));
root.render(<AgeCalculator />);