import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/Counter';

import AddPostsForm from './features/posts/AddPostsForm';

import PersonsList from './features/persons/PersonsList';
import PostLists from './features/posts/PostLists';

function App() {
  return (
    <div >
      <PostLists />
      <AddPostsForm />
    </div>
  );
}

export default App;
