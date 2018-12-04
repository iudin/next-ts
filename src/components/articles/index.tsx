import * as React from 'react';
import { connect } from 'react-redux';

import { IState } from '../../store/i';
import { getArticlesList } from '../../store/articles/actions';
import { IArticlesState, IArticlesActions } from '../../store/articles/i';

import ArticlesWrapper from './style';

type IProps = IArticlesState & IArticlesActions;

const pageSize = 8;

class Articles extends React.Component<IProps> {
  public componentDidMount() {
    this.props.getArticlesList!({
      tags: JSON.stringify(['articles']),
      size: pageSize
    });
  }
  public render() {
    const { data } = this.props;
    return (
      <ArticlesWrapper>
        <h1>Статьи и обзоры</h1>
        <div className="wrapper-sm articles">
          {data.length > 0 ? (
            <div className="arts">
              {data.map(item => (
                <div className="arts_item" key={item.articleId}>
                  <div className="arts_img">
                    <img src={item.photos[0]} alt={item.header} />
                  </div>
                  <div className="arts_title">{item.header}</div>
                </div>
              ))}
            </div>
          ) : (
            <p>Нет обзоров!</p>
          )}
        </div>
      </ArticlesWrapper>
    );
  }
}

const mapStateToProps = (state: IState) => ({
  ...state.articles
});
const mapDispatchToProps = {
  getArticlesList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Articles as any);
