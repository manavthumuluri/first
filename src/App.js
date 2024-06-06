import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Manav">Baahubali: The Beginning is a 2015 Indian epic action film co-written and directed by S. S. Rajamouli, and produced by Shobu Yarlagadda and Prasad Devineni under Arka Media Works. The film was produced in Tollywood and was filmed in both Telugu and Tamil languages simultaneously. It features Prabhas in a dual role alongside Rana Daggubati, Anushka Shetty, Tamannaah Bhatia, Ramya Krishna, Sathyaraj, and Nassar. The first of Duology, the film follows Sivudu, an adventurous young man who helps his love Avantika rescue Devasena, the former queen of Mahishmati who is now a prisoner under the tyrannical rule of king Bhallaladeva. The story concludes in Baahubali 2: The Conclusion.</div>
      <div className="Anand">
        {" "}
        <h1>BAAHUBALI 2</h1>
        
        <iframe
          width="450"
          height="315"
          src="https://www.youtube.com/embed/G62HrubdD6o?si=CJJVY7fzNoRjbsRh"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>{" "}
      </div>
      <div className="harsha">
       <img src="https://img.etimg.com/thumb/msid-58275512,width-480,height-360,imgsize-226840,resizemode-75/the-magnum-opus-baahubali-the-beginning.jpg"></img>
      </div>
    </div>
  );
}

export default App;
