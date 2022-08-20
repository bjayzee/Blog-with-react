import './post.css';

export default function Post() {
  return(
    <div className="post">
        <img 
            className="postImg"
            src="https://images.unsplash.com/photo-1644659513503-abcbf75b4521?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className='postTitle'>
              Lorem ipsum dolor sit ammet
            </span>
            <hr/>
            <span className='postDate'>
              1 hour ago
            </span> 
        </div>
        <p className='postDesc'>
          Praesent quis gravida felis, condimentum convallis lorem. In tristique quam turpis, convallis ultricies nisl auctor vel. Aenean facilisis a ligula vitae congue
          Donec et dolor dolor. Curabitur erat leo, mollis in purus sed, facilisis feugiat purus. Ut in turpis egestas, interdum elit id, laoreet urna. Praesent ullamcorper est felis
        </p>
    </div>
  );
}
