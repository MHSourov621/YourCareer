import React from 'react';

const Blog = () => {
    return (
        <div>
            <h3>1: When should you use context API?</h3>
            <p>Ans: Context API is used when some data need to be accessible by many components at different nesting pages.</p>

            <h3>2: What is a custom hook?</h3>
            <p>Ans: A custom hook is a special JavaScript function whose name starts with "use" and can be used to call other hooks like useState, useEffect, useMemo etc</p>

            <h3>3: What is useRef?</h3>
            <p>Ans: useRef is a custom hook in react. It can be used to store a mutable value that does not cause a re-render when updated and access a DOM element directly</p>
        
            <h3>4: What is useMemo?</h3>
            <p>Ans: useMemo is a custom hook that returns a memoized value of a passed in resource-intensive function. This hook can improve performance.</p>
        </div>
    );
};

export default Blog;