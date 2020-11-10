import cx from 'classnames';
import {Component} from 'react';

export default class LikeButton extends Component {
  state = {
    count:100,
    clicked: true
  }
  getCount = () => {
    if(this.clicked) {
       this.setState({
        count:100,
      })
      
    } else {
      let newCount = this.state.count + 1;
      this.setState({
        count: newCount
      })
    }
    this.clicked=!this.clicked;
  }

  render() {
    return (
      <>
        <div>
          <button onClick={this.getCount} className={cx("like-button", {liked:this.clicked})}>Like | <span className="likes-counter">{this.state.count}</span>  </button>
        </div>
        <style>
        {` 
      .like-button {
        font-size: 1rem;
        padding: 5px 10px;
        color: #585858
      }
      .liked {
        font-weight: bold;
        color: #1565c0;
      }
    `}
        </style>
      </>
    );
  }
}