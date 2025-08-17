import "./Header.css";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useProduct } from "./productContext";
import Convertible from "../img/convertible.jpg";
import Coupe from "../img/coupe.jpg";
import Hatch from "../img/hatch.jpg";
import Minivan from "../img/minivan.jpg";
import Pickup from "../img/pickup.jpg";
import Sedan from "../img/sedan.jpg";
import Suv from "../img/suv.jpg";
import Wagon from "../img/wagon.jpg";
import Hamburger from "../img/icon-hamburger.svg";
import Close from "../img/icon-close.svg";
function Header(){
    const navigate = useNavigate();
  const { setSelectedProduct } = useProduct();

  const products = [
    {
      name: "Convertible",
      image: Convertible,
      price: "35,000",
      description:
        "Four door vehicles offering a balance of comfort, fuel efficiency, and affordability",
    },
    {
      name: "Coupe",
      image: Coupe,
      price: "35,000",
      description:
        "Four door vehicles offering a balance of comfort, fuel efficiency, and affordability",
    },
    {
      name: "Hatch",
      image: Hatch,
      price: "35,000",
      description:
        "Four door vehicles offering a balance of comfort, fuel efficiency, and affordability",
    },
    {
      name: "Minivan",
      image: Minivan,
      price: "35,000",
      description:
        "Four door vehicles offering a balance of comfort, fuel efficiency, and affordability",
    },
    {
      name: "Pickup",
      image: Pickup,
      price: "35,000",
      description:
        "Four door vehicles offering a balance of comfort, fuel efficiency, and affordability",
    },
    {
      name: "Sedan",
      image: Sedan,
      price: "35,000",
      description:
        "Four door vehicles offering a balance of comfort, fuel efficiency, and affordability",
    },
    {
      name: "SUV",
      image: Suv,
      price: "35,000",
      description:
        "Four door vehicles offering a balance of comfort, fuel efficiency, and affordability",
    },
    {
      name: "Wagon",
      image: Wagon,
      price: "35,000",
      description:
        "Four door vehicles offering a balance of comfort, fuel efficiency, and affordability",
    },
    {
      name: "Coupe",
      image: Coupe,
      price: "35,000",
      description:
        "Four door vehicles offering a balance of comfort, fuel efficiency, and affordability",
    }
  ];

  const handleBuy = (product) => {
    setSelectedProduct(product);
    navigate("/Buy");
  };
  function Ham(){
    document.querySelector("#mobile").style.transform = "translateX(0)";
    // document.querySelector("#mobile").style.display = "block";
  }
  function close(){
    document.querySelector("#mobile").style.transform = "translateX(500px)";
  }
  {
    const mobileDelete = document.querySelectorAll(".mobile .go > a");
    mobileDelete.forEach(item => {
        item.onclick = function(){
            document.querySelector("#mobile").style.transform = "translateX(500px)";
        }
    });
  }
    return(
        <div id="header">
            <div id="mobile">
                <div className="mobile">
                    <nav>
                        <h2>Car Dealer</h2>
                        <img src={Close} onClick={close} alt="" />
                    </nav>
                    <div className="go">
                        <a href="#">HOME</a>
                        <a href="#service">SERVICES</a>
                        <a href="#fleet">FLEET</a>
                        <a href="#faq">FAQ</a>
                        <a href="#contact">CONTACT</a>
                    </div>
                </div>
            </div>
            <div className="header">
                <header>
                    <div>
                        <img src={Hamburger} id="hamburger" onClick={Ham} alt="hamburger" />
                        <h2>Car Dealer</h2>
                    </div>
                    
                    <div className="go">
                        <a href="#">HOME</a>
                        <a href="#service">SERVICES</a>
                        <a href="#fleet">FLEET</a>
                        <a href="#faq">FAQ</a>
                        <a href="#contact">CONTACT</a>
                    </div>
                    <div>
                        <nav>
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <input type="search" placeholder="Search..." />
                        </nav>
                        <i class="fa-solid fa-user"></i>
                    </div>
                </header>
                
                <h1>Find Your Dream Car Here!</h1>
            </div>
            <h2 id="service">CAR CATEGORY</h2>
            <aside>
                {products.map((p, i) => (
                <nav key={i}>
                    <img src={p.image} alt={p.name} />
                    <div>
                    <h4>{p.name}</h4>
                    <p>{p.description}</p>
                    <li>${p.price}</li>
                    <button onClick={() => handleBuy(p)}>Buy</button>
                    </div>
                </nav>
                ))}
            </aside>
            <h2 id="fleet">Trend Vehicles</h2>
            <summary>
                <div className="div">
                    <h4>BMW i4</h4>
                    <nav>
                        <span>$150/day</span>
                        <button>Book Now</button>
                    </nav>
                </div>
                <div>
                    <h4>Audi A7</h4>
                    <nav>
                        <span>$130/day</span>
                        <button>Book Now</button>
                    </nav>
                </div>
                <div>
                    <h4>Benz GLE</h4>
                    <nav>
                        <span>$140/day</span>
                        <button>Book Now</button>
                    </nav>
                </div>
                <div>
                    <h4>Porsche 911</h4>
                    <nav>
                        <span>$180/day</span>
                        <button>Book Now</button>
                    </nav>
                </div>
            </summary>
            <h2 style={{textAlign: "center"}} id="faq">Why Choose Us</h2>
            <article>
                <div>
                    <i class="fa-solid fa-martini-glass-citrus"></i>
                    <h4>Special Financing offers</h4>
                    <p>Our stress-free finance department that can find financial solution to save you money</p>
                </div>
                <div>
                    <i class="fa-solid fa-martini-glass-citrus"></i>
                    <h4>Special Financing offers</h4>
                    <p>Our stress-free finance department that can find financial solution to save you money</p>
                </div>
                <div>
                    <i class="fa-solid fa-martini-glass-citrus"></i>
                    <h4>Special Financing offers</h4>
                    <p>Our stress-free finance department that can find financial solution to save you money</p>
                </div>
            </article>

            <main>
                <div>
                    <h1>Book Tesla With a big Discount</h1>
                    <button>Shop Now</button>
                </div>
                <div>
                    <h1 style={{color: "rgb(96, 96, 147)"}}>50%</h1>
                    <p>For everyone Tesla cars</p>
                </div>
            </main>

            <footer id="contact">
                <section className="first">
                    <div><h2>Car Dealer</h2></div>
                    <div>
                        <p>Top cities</p>
                        <a href="#">New York</a>
                        <a href="#">London</a>
                        <a href="#">Berlin</a>
                        <a href="#">Los Angeles</a>
                        <a href="#">Paries</a>
                    </div>
                    <div>
                        <p>Explore</p>
                        <a href="#">Intercity Rides</a>
                        <a href="#">Limousine service</a>
                        <a href="#">Chauffeur Service</a>
                        <a href="#">Private car service</a>
                        <a href="#">Airport Transfer</a>
                    </div>
                    <div>
                        <p>Intercity Rides</p>
                        <a href="#">Intercity Rides</a>
                        <a href="#">Limousine service</a>
                        <a href="#">Chauffeur Service</a>
                        <a href="#">Private car service</a>
                        <a href="#">Airport Transfer</a>
                    </div>
                </section>
                <section className="last">
                    <p>&copy; 2023 Car dealer</p>
                    <nav>
                        <a href="#">Terms</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Legal Notice</a>
                        <a href="#">Accesibility</a>
                    </nav>
                    <nav>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-facebook"></i>
                    </nav>
                </section>
            </footer>
        </div>
    )
}
export default Header;