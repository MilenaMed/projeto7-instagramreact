import React from 'react';
import Stories from './Stories.js';
import Posts from './Posts.js';
import Sidebar from './Sidebar.js';

function Corpo() {
    return (
        <div class="corpo">
            <div class="esquerda">
                <Stories />
                <Posts />
            </div>
            <Sidebar/>
        </div>
    )
}

export default Corpo;
