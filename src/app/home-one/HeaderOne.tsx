"use client";

import { useState } from "react";
import Link from "next/link";
import {
  blogDetailPath,
  destinationDetailPath,
  tourDetailPath,
} from "../../data/details";

const homeLinks = [
  ["Travel Agency", "/"],
  ["Hiking Travel", "/home-two"],
  ["Home Yacht", "/home-three"],
  ["Wild Travel", "/home-four"],
  ["Travel Africa", "/home-five"],
  ["Tour Marketplace", "/home-six"],
  ["Summer Travel", "/home-seven"],
];

const tourLinks = [
  ["Tour One", "/tour"],
  ["Tour Two", "/tour-two"],
  ["Tour Three", "/tour-three"],
  ["Tour Four", "/tour-four"],
  ["Tour Five", "/tour-five"],
  ["Tour Details", tourDetailPath("The Luxury Island Hopper")],
];

const pageLinks = [
  ["About", "/about"],
  ["Teams", "/team"],
  ["Blog", "/blog"],
  ["Blog Details", blogDetailPath("Top 10 Essential Travel Tips for First-Time Travelers")],
  ["Log In", "/sign-in"],
  ["Sign Up", "/sign-up"],
];

const destinationRegions = {
  europe: [["Paris", "11.webp"], ["Santorini", "12.webp"], ["Venice", "13.webp"], ["London", "14.webp"]],
  asia: [["Tokyo", "15.webp"], ["Bali", "16.webp"], ["Bangkok", "17.webp"], ["Seoul", "18.webp"]],
  africa: [["Cape Town", "19.webp"], ["Marakkes", "20.webp"], ["Nairobi", "21.webp"], ["Cairo", "22.webp"]],
  oceania: [["Sydney", "23.webp"], ["Aukland", "24.webp"], ["Fiji Islands", "25.webp"], ["Gold Coast", "26.webp"]],
  middleeast: [["Dubai", "27.webp"], ["Doha", "28.webp"], ["Muscat", "29.webp"], ["Istanbul", "30.webp"]],
  america: [["New York", "31.webp"], ["Toronto", "32.webp"], ["Los Angeles", "25.webp"], ["Rio De Janairo", "26.webp"]],
} as const;

type Region = keyof typeof destinationRegions;

const regions: Array<[Region, string]> = [
  ["europe", "Europe"],
  ["asia", "Asia"],
  ["africa", "Africa"],
  ["oceania", "Oceania"],
  ["middleeast", "Middle East"],
  ["america", "America"],
];

function DropdownMenu({ links }: { links: string[][] }) {
  return (
    <ul className="rts-submenu list-unstyled menu-home">
      {links.map(([label, href]) => <li className="nav-item" key={label}><Link className="nav-link page" href={href}>{label}</Link></li>)}
    </ul>
  );
}

export default function HeaderOne() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeRegion, setActiveRegion] = useState<Region>("europe");

  return (
    <header className="header-style-one header--sticky">
      <div className="row">
        <div className="col-lg-12">
          <div className="header-style-one-wrapper">
            <div className="left-area">
              <div className="logo-area">
                <Link href="/" className="logo">
                  <img className="light" src="/assets/images/logo/01.svg" alt="logo" />
                  <img className="dark" src="/assets/images/logo/02.svg" alt="logo" />
                </Link>
              </div>

              <nav className="main-nav-area" style={{ display: menuOpen ? "block" : undefined }}>
                <ul className="list-unstyled rts-desktop-menu">
                  <li className="menu-item rts-has-dropdown">
                    <a className="main-element rts-dropdown-main-element" href="#">Home</a>
                    <DropdownMenu links={homeLinks} />
                  </li>

                  <li className="menu-item rts-has-dropdown">
                    <a className="rts-dropdown-main-element" href="#">Tours</a>
                    <DropdownMenu links={tourLinks} />
                  </li>

                  <li className="menu-item rts-has-dropdown">
                    <a className="rts-dropdown-main-element" href="#">Destinations</a>
                    <ul className="rts-submenu list-unstyled menu-home mega-menu">
                      <li>
                        <div className="row p-0">
                          <div className="col-lg-8">
                            <div className="inner">
                              <h4>Explore Our Destination</h4>
                              <div className="destination-area-wrapper">
                                <div className="region-area">
                                  <ul>
                                    {regions.map(([region, label]) => <li data-region={region} className={activeRegion === region ? "active" : ""} onMouseEnter={() => setActiveRegion(region)} onClick={() => setActiveRegion(region)} key={region}>{label}</li>)}
                                  </ul>
                          <Link href="/destination" className="view-all-btn">View All</Link>
                                </div>
                                <div className="destinations">
                                  {regions.map(([region]) => (
                                    <div className={`destlist${activeRegion === region ? " active" : ""}`} data-region={region} key={region}>
                                      {destinationRegions[region].map(([name, image]) => (
                                        <div className="destination-wrapper-3 radius-10 image-transform" key={name}>
                                    <div className="image-area"><Link href={destinationDetailPath(name)}><img className="hover-image" src={`/assets/images/destination/${image}`} alt="" /></Link></div>
                                    <div className="content"><h6 className="title"><Link href={destinationDetailPath(name)}>{name}</Link></h6></div>
                                        </div>
                                      ))}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 p-0">
                            <div className="ad-image">
                              <img src="/assets/images/destination/25.webp" alt="" />
                              <div className="ad-content">
                                <h5 className="ad-title">Escape the Ordinary — Discover the World!</h5>
                              <Link className="rts-btn btn-primary with-arrow" href="/destination">Discover More <i className="fa-regular fa-arrow-up up-right" /></Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>

                  <li className="menu-item rts-has-dropdown">
                    <a className="rts-dropdown-main-element" href="#">Pages</a>
                    <DropdownMenu links={pageLinks} />
                  </li>
                <li className="menu-item"><Link className="main-element rts-dropdown-main-element" href="/contact">Contact</Link></li>
                </ul>
              </nav>
            </div>

            <div className="button-area-start">
            <Link href="/sign-in" className="rts-btn btn-primary btn-white">Log In</Link>
            <Link href="/sign-up" className="rts-btn btn-primary">Sign Up</Link>
              <div className="menu-btn-toggle2 white">
                <div className="eel-icon-menu-wrap"><em className="eel-icon-menu" /><em className="eel-icon-menu" /></div>
              </div>
              <div className="menu-btn menu-btn-toggle radius-6" id="menu-btn" role="button" tabIndex={0} aria-label="Toggle menu" onClick={() => setMenuOpen((open) => !open)} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") setMenuOpen((open) => !open); }}>
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="14" width="20" height="2" fill="#FFFFFF" /><rect y="7" width="20" height="2" fill="#FFFFFF" /><rect width="20" height="2" fill="#FFFFFF" /></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
