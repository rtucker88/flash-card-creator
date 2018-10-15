import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

import Analysis from './Analysis/Analysis';
import ArticleUpload from './ArticleUpload/ArticleUpload';
import NavBar from './NavBar/NavBar';
import ReadingView from './ReadingView/ReadingView';

import './App.css';
import ListView from './ListView/ListView';

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <CssBaseline />
        <NavBar />
        <Switch>
          <Route path="/" component={ListView} exact={true} />
          <Route path="/upload" component={ArticleUpload} />
          <Route path="/reading/:articleId" component={ReadingView} />
          <Route path="/analysis/:articleId" component={Analysis} />
        </Switch>
      </div>
    );
  }
}

export default App;
