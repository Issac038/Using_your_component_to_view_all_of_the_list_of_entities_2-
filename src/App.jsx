import './App.css'
import PostCard from './components/postcard';


function App() {

  const initialPosts = [
    {
      id: 1,
      profileImage: 'https://pbs.twimg.com/media/GAD-_bQbEAAGCgi.png',
      username: 'Alice',
      content: 'This is my first post!',
      isLiked: false,
    },
    {
      id: 2,
      profileImage: 'https://wallpapers.com/images/hd/confused-patrick-random-pfp-x63wp9vs43cem64s.jpg',
      username: 'Bob',
      content: 'Loving this social media app.',
      isLiked: false,
    },
    {
      id: 3,
      profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9WZGLz3NbyByGpFyI3fk_vjgkYgaoqM2ntg&s',
      username: 'Charlie',
      content: 'Just another day...',
      isLiked: false,
    },
  ];

  return (
    <>
        <div className="app">
      <h1>Post List</h1>
      {initialPosts.map((post) => (
        <PostCard
          key={post.id}
          profilePicture={post.profileImage}
          username={post.username}
          content={post.content}
        />
      ))}
    </div>
    </>
  )
}

export default App
