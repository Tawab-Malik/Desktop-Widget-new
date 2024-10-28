import "../styles/lexikon.css";
import '../styles/navigator.css'
export default function Navigator() {

  // Sample data for carousel cards (8 items in total)
  const cards = [
    { title: "Lorem ipsum dol", description: "et spiritus sancti lorem dilor" },
    { title: "Lorem ipsum dol", description: "et spiritus sancti lorem dilor" },
    { title: "Lorem ipsum dol", description: "et spiritus sancti lorem dilor" },
    { title: "Lorem ipsum dol", description: "et spiritus sancti lorem dilor" },
  
  ];



  return (
    <>
      <div className="lexikon">
        <span role="img" class="anticon">
          <svg
            width="51"
            height="51"
            viewBox="0 0 51 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="25.5" cy="25.5" r="25" stroke="#E3E3E3"></circle>
            <path
              d="M20.1667 27.3333C18.2337 27.3333 16.6667 28.9003 16.6667 30.8333C16.6667 32.7664 18.2337 34.3333 20.1667 34.3333C20.5758 34.3333 20.9684 34.2631 21.3334 34.1342"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M16.9746 29.2054C15.4117 28.4512 14.3334 26.8515 14.3334 25C14.3334 23.5863 14.9619 22.3196 15.9547 21.4638"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M15.9906 21.3696C15.6807 20.9063 15.5 20.3492 15.5 19.75C15.5 18.1392 16.8058 16.8333 18.4167 16.8333C19.0734 16.8333 19.6794 17.0504 20.1669 17.4167"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M20.444 17.4929C20.2661 17.1158 20.1667 16.6945 20.1667 16.25C20.1667 14.6392 21.4725 13.3333 23.0834 13.3333C24.6942 13.3333 26 14.6392 26 16.25V34.3333"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M21.3333 34.3333C21.3333 35.622 22.378 36.6667 23.6666 36.6667C24.9553 36.6667 26 35.622 26 34.3333"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M26 19.1667C26 21.0997 27.5669 22.6667 29.5 22.6667"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M31.8334 27.3333C33.7664 27.3333 35.3334 28.9003 35.3334 30.8333C35.3334 32.7664 33.7664 34.3333 31.8334 34.3333C31.4243 34.3333 31.0316 34.2631 30.6667 34.1342"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M35.0255 29.2054C36.5883 28.4512 37.6667 26.8515 37.6667 25C37.6667 23.5863 37.0381 22.3196 36.0452 21.4638"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M36.0094 21.3696C36.3193 20.9063 36.5 20.3492 36.5 19.75C36.5 18.1392 35.1942 16.8333 33.5834 16.8333C32.9266 16.8333 32.3206 17.0504 31.8331 17.4167"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M26 16.25C26 14.6392 27.3059 13.3333 28.9167 13.3333C30.5275 13.3333 31.8333 14.6392 31.8333 16.25C31.8333 16.6945 31.7339 17.1158 31.556 17.4929"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M30.6667 34.3333C30.6667 35.622 29.622 36.6667 28.3333 36.6667C27.0446 36.6667 26 35.622 26 34.3333"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </span>
        <h2>Salü, wie kann ich ihnen heute helfen?</h2>
      </div>

      
       
        <div className="gridmain">
          <div
            className="grid"
          >
            {cards.map((card, index) => (
              <div className="carousel-card main2" key={index}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
       
        
    
    </>
  );
}
