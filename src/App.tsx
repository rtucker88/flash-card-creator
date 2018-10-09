import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

import Analysis from './Analysis/Analysis';
import ArticleUpload from './ArticleUpload/ArticleUpload';
import NavBar from './NavBar/NavBar';
import ReadingView from './ReadingView/ReadingView';

import './App.css';

// TODO: Fix this as we move to backend
interface IAppState {
  article: any;
}

class App extends React.Component<{}, IAppState> {
  constructor(props: IAppState) {
    super(props);

    this.state = {
      article: { paragraphs: [], title: '' }
    };
  }

  public render() {
    const { article } = this.state;

    return (
      <div>
        <CssBaseline />
        <NavBar />
        <Switch>
          <Route path="/upload">
            <ArticleUpload />
          </Route>
          <Route path="/reading/:articleId" component={ReadingView} />
          <Route path="/analysis">
            <Analysis article={article} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
