import './singlePost.css'

export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className='singlePostWrapper'>
            <img
                src='https://images.unsplash.com/photo-1644813948290-7f43b8b8a98a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                alt='' 
                className='singlePostimg'
            />
            <h1 className='singlePostTile'>Loremgando Peleacua Loquacious Omni
            <div className='singlePostEdit'>
                <i className='singlePostIcon' far fa-edit></i>
                <i className='singlePostIcon' far fa-thrash-alt></i>
            </div>
            </h1>
            <div className='singlePostInfo'>
                <span className='singlePostAuthor'>
                    Author: <b>Bolaji</b>
                </span>
                <span className='singlePostDate'>1 hour ago</span>
            </div>
            <p className='singlePostDesc'>
                Praesent quis gravida felis, condimentum convallis lorem
                Praesent quis gravida felis, condimentum convallis lorem
                Praesent quis gravida felis, condimentum convallis lorem
                Praesent quis gravida felis, condimentum convallis lorem
                Praesent quis gravida felis, condimentum convallis lorem
                Praesent quis gravida felis, condimentum convallis lorem
                Praesent quis gravida felis, condimentum convallis lorem
                Praesent quis gravida felis, condimentum convallis lorem
                Praesent quis gravida felis, condimentum convallis lorem
                Praesent quis gravida felis, condimentum convallis lorem
                Praesent quis gravida felis, condimentum convallis lorem
                Praesent quis gravida felis, condimentum convallis lorem
                Praesent quis gravida felis, condimentum convallis lorem
                Praesent quis gravida felis, condimentum convallis lorem
                Praesent quis gravida felis, condimentum convallis lorem
                Praesent quis gravida felis, condimentum convallis lorem
                Praesent quis gravida felis, condimentum convallis lorem
                Praesent quis gravida felis, condimentum convallis lorem
            </p>
        </div>
    </div>
  )
}
