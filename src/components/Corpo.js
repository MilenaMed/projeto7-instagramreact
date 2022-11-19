import React from 'react';
import Stories from '../components/Stories.js';
import Post from '../components/Post.js';
import Sidebar from '../components/Sidebar.js';

function Corpo() {
    return (
<div class="corpo">
      <div class="esquerda">
        <Stories />
        <Post />
      </div>
      <Sidebar/>
    </div>
    )
    }

    export default Corpo;
