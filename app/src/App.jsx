import './App.css'

const Header = () => {
  return <h1>My Pet Pics</h1>;
};

const InstagramPost = () => {
  return (
    <figure>
      <img alt="My Peppercorn!" src="./Peppercorn.jpg" width="500" height="700" />
      <figcaption>Check out my cute cat!</figcaption>
    </figure>
  );
};

function App() {
  return (
    <>
      <Header />
      <InstagramPost />
    </>
  );
}

export default App
