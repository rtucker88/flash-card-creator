import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import * as dotProp from 'dot-prop-immutable';

import CssBaseline from '@material-ui/core/CssBaseline';

import Analysis from './Analysis/Analysis';
import ArticleUpload from './ArticleUpload/ArticleUpload';
import NavBar from './NavBar/NavBar';
import ReadingView from './ReadingView/ReadingView';

import './App.css';
import { createArticleFromText, IArticle } from './resources/article';

interface IAppState {
  article: IArticle;
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
            <ArticleUpload onComplete={this.handleOnCompleteUpload} />
          </Route>
          <Route path="/reading">
            <ReadingView article={article} onWordClick={this.handleWordClick} />
          </Route>
          <Route path="/analysis">
            <Analysis article={article} />
          </Route>
        </Switch>
      </div>
    );
  }

  private handleOnCompleteUpload = (text: string, title: string) => {
    this.setState({
      article: createArticleFromText(text, title)
    });
  };

  private handleWordClick = (
    paragraph: number,
    sentence: number,
    word: number
  ) => {
    const unknownWord = this.state.article.paragraphs[paragraph].sentences[
      sentence
    ].words[word];
    const { unknown } = unknownWord;

    const newState = dotProp.set(
      this.state,
      `article.paragraphs.${paragraph}.sentences.${sentence}.words.${word}.unknown`,
      !unknown
    );

    this.setState(newState);
  };
}

export default App;
