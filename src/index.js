require('file-loader?name=[name].[ext]!./index.html')

import React from "react";
import { ReactDOM } from "react";
import { App } from './App'


ReactDOM.render(<App/>, document.getElementById('root'))