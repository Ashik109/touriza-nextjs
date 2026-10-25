import Link from "next/link";

const offers = [
  { title: <>Save Up to 30% on Next Adventure!</>, button: "Book Now", background: "/assets/images/offer/01.webp", person: "/assets/images/offer/03.webp", delay: "200" },
  { title: <>Fly High <span>30% OFF</span> on Air Tickets!</>, button: "Explore Flights", className: "mid", person: "/assets/images/offer/04.webp", delay: "400" },
  { title: <>Explore the World with 20% OFF</>, button: "Book Now", background: "/assets/images/offer/02.webp", delay: "600" },
];

export default function OffersOne() {
  return <div className="rts-offer-area rts-section-gap"><div className="container"><div className="section-inner"><div className="row g-5">{offers.map((offer) => <div className="col-lg-4 col-md-6" key={offer.button + offer.delay}><div className={`offer-wrapper radius-10${offer.className ? ` ${offer.className}` : ""}`} data-aos="fade-left" data-aos-delay={offer.delay} data-bg-src={offer.background} style={offer.background ? { backgroundImage: `url(${offer.background})`, backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat" } : undefined}><p className="sub-title">Book Today</p><h4 className={`title${offer.className ? " ch" : ""}`}>{offer.title}</h4><Link href="/contact" className="rts-btn btn-primary with-arrow">{offer.button} <i className="fa-regular fa-arrow-up up-right" /></Link>{offer.person && <div className="person" data-aos={offer.className ? "fade-up" : "fade-left"} data-aos-delay="700"><img src={offer.person} alt="" /></div>}</div></div>)}</div></div></div></div>;
}
