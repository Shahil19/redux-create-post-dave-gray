import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/Counter';
import PostLists from './features/posts/PostLists';
import AddPostsForm from './features/posts/AddPostsForm';

function App() {
  return (
    <div className="App">
      <PostLists />
      <AddPostsForm />
    </div>
  );
}

export default App;
