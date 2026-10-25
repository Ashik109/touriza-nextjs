const counters = [["01.svg", "71", "K+", "Happy Travelers", "100"], ["02.svg", "250", "+", "Tour Packages", "300"], ["03.svg", "50", "+", "Destinations Covered", "500"], ["04.svg", "10", "+", "Years of Experience", "700"]];

export default function CounterOne() {
  return <div className="rts-counter-area rts-section-gapBottom"><div className="container"><div className="section-inner">{counters.map(([icon, count, suffix, label, delay]) => <div className="counter-wrapper radius-10" data-aos="fade-up" data-aos-delay={delay} key={label}><div className="icon"><img src={`/assets/images/counter/${icon}`} alt="" /></div><div className="counter-area"><h2 className="title"><span className="odometer" data-count={count}>{count}</span>{suffix}</h2><span className="done">{label}</span></div></div>)}</div></div></div>;
}
