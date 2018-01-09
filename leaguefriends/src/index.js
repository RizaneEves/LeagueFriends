import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ChampList from './ChampList';
import { champions } from './champions';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

ReactDOM.render(<ChampList champions={champions}/>, document.getElementById('root'));
registerServiceWorker();
