import React, {Component} from 'react';

class Mailbox extends Component {
  render() {
    const {unreadMessages} = this.props;
    return (
      <div>
        <h1>Hello!</h1>
        {unreadMessages.length > 0 &&
          <h2>
             You have {unreadMessages.length} unread messages.
          </h2>
        }
      </div>
    )
  }
}

//导出组件
export default Mailbox;
