// import "./App.css"
import Card from "./components/Card";

function App() {
  const data = [
    {
      name: "Noaman Saleem",
      exp: 5,
      qualification: "MSCS",
      img: "https://avatars.githubusercontent.com/u/117230038?v=4",
    },
    {
      name: "Khawaja Ubaid ur Rehman",
      exp: 11,
      qualification: "MSSE",
      img: "https://admin.umt.edu.pk/Media/UserProfile/638859483138600958860.jpg",
    },
    {
      name: "Dr Hafiz Ubdul Rehman",
      exp: 3,
      qualification: "PHD",
      img: "https://admin.umt.edu.pk/Media/UserProfile/638859444693333429333.jpg",
    },
  ];
  return (
    <>
      <h1>Advance Web Technologies</h1>
      <p>This is the best course to learn React</p>
      <h2>Course Content</h2>
      <div className="card-container">
        {data.map((item) => {
          return (
            <Card
              name={item.name}
              exp={item.exp}
              qualification={item.qualification}
              img={item.img}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
