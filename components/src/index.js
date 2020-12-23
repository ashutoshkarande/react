import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'
//import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail
                author="ashu"
                timeAgo="today at 9:00AM"
                content="Nice blog post!"
            />
            <CommentDetail
                author="spk"
                timeAgo="today at 10:00AM"
                content="You can do better"
            />
            <CommentDetail
                author="abc123"
                timeAgo="today at 11:00AM"
                content="I didn't liked this!"
            />
            <ApprovalCard>
                <CommentDetail
                    author="abc456"
                    timeAgo="today at 11:00AM"
                    content="I didn't liked this!"
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));