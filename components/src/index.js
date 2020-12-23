import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'
//import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
            <CommentDetail
                author="ashu"
                timeAgo="today at 9:00AM"
                content="Nice blog post!"
            />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail
                author="spk"
                timeAgo="today at 10:00AM"
                content="You can do better"
            />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail
                author="abc123"
                timeAgo="today at 11:00AM"
                content="I didn't liked this!"
            />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="abc456"
                    timeAgo="today at 11:00AM"
                    content="I didn't liked this!"
                />
            </ApprovalCard>
            <ApprovalCard>
                <div>
                    <h4>Warning</h4>
                    You want to continue?
                </div>
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));