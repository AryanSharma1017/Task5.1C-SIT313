import { useState } from 'react';
import './App.css';
import ArticlePart from './article';
import QuestionPart from './question';

function App() {
  const [post_type,set_post] = useState('');

  return (
    <div className="App">
      <h3>New Post</h3>
      <div className='types'>
        Select Post Type:  Question <input type="radio" value='first' name="Selection" checked={post_type === 'first'} onChange={() => set_post('first')}/> 
        Article <input type="radio" value='second' name="Selection" checked={post_type === 'second'} onChange={() => set_post('second')}/>
      </div>
      <h3>What Do you want to Ask or Share</h3>
      {post_type === 'first' && <QuestionPart/>}
      {post_type === 'second' && <ArticlePart/>}
      

    </div>
  );
}

export default App;
