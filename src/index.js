import React from 'react';
import ReactDOM from 'react-dom/client';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

const App = () => {
    return (
        <div className='ui container comments'>
            <ApprovalCard>
                <CommentDetail
                    author='aman'
                    timeAgo='today at 7:00PM'
                    content='nice blog'
                    avatar="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author='ayaush'
                    timeAgo='today at 8:00PM'
                    content='cool blog'
                    avatar="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author='kshitij'
                    timeAgo='today at 9:00PM'
                    content='lallaa blog'
                    avatar="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author='harshit'
                    timeAgo='today at 10:00PM'
                    content='wow blog'
                    avatar="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                />
            </ApprovalCard>

        </div >
    )
}
root.render(<App />);
