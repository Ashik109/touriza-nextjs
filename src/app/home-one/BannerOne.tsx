"use client";

import { useRef, useState } from "react";
import type { SwiperOptions } from "swiper/types";
import useSwiper from "../hooks/useSwiper";

const banners = [
  "/assets/images/banner/bg-01.webp",
  "/assets/images/banner/bg-02.webp",
  "/assets/images/banner/bg-03.webp",
];

const bannerSliderOptions: SwiperOptions = {
  slidesPerView: 1,
  speed: 1200,
  effect: "fade",
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".slider-dots",
    clickable: true,
  },
};

const fields = [
  {
    label: "Destination",
    value: "All Location",
    name: "adult",
    options: ["Bhutan", "London", "Maldives", "Nepal", "Argentina", "Dubai", "Canada", "Indonesia", "China", "Sri Lanka"],
  },
  {
    label: "Trip Types",
    value: "Activities",
    name: "child",
    options: ["Hiking", "Air Ballon", "Jungle Safari", "Paragliding", "SightSeeing", "Peak Climbing", "Scuba Diving", "Travel"],
  },
  {
    label: "Duration",
    value: "3 Days - 10 Days",
    name: "duration",
    options: ["1 Days - 3 Days", "4 Days - 5 Days", "5 Days - 6 Days", "6 Days - 7 Days", "7 Days - 8 Days", "8 Days - 9 Days", "9 Days - 10 Days", "10 Days - 11 Days"],
  },
  {
    label: "Budget",
    value: "$699 - $2,000",
    name: "budget",
    options: ["$699 - $2,000", "$799 - $2,200", "$899 - $2,400", "$999 - $2,500", "$1099 - $2,600", "$1199 - $2,800", "$1299 - $2,900", "$1399 - $3,000"],
  },
];

function FieldIcon({ name }: { name: string }) {
  if (name === "adult") {
    return <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 0C4.4087 0 2.88258.632141 1.75736 1.75736.632141 2.88258 0 4.4087 0 6c0 4.05 5.2875 8.625 5.5125 8.82A.75.75 0 0 0 6 15a.75.75 0 0 0 .4875-.18C6.75 14.625 12 10.05 12 6c0-1.5913-.6321-3.11742-1.7574-4.24264C9.11742.632141 7.5913 0 6 0Zm0 13.2375C4.4025 11.7375 1.5 8.505 1.5 6A4.5 4.5 0 0 1 6 1.5 4.5 4.5 0 0 1 10.5 6c0 2.505-2.9025 5.745-4.5 7.2375ZM6 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 4.5A1.5 1.5 0 1 1 6 4.5a1.5 1.5 0 0 1 0 3Z" fill="currentColor" /></svg>;
  }

  if (name === "child") {
    return <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.919 5.067c-.516 0-1.01.097-1.465.272-.356-.792-.664-1.63-.818-2.408A2.68 2.68 0 0 0 11.007.771a.586.586 0 1 0 0 1.172c.604 0 1.14.337 1.405.855l-1.227 1.853h-4.92l-.28-.704h.116a.586.586 0 1 0 0-1.172H4.081a.586.586 0 1 0 0 1.172h.643l.511 1.287a4.08 4.08 0 1 0 2.884 4.5h1.076a.586.586 0 0 0 .504-.287l3.08-5.184c.18.559.406 1.119.65 1.654a4.08 4.08 0 1 0 2.49-.85ZM4.08 12.057a2.909 2.909 0 1 1 2.85-3.495H4.08a.586.586 0 1 0 0 1.172h2.85a2.91 2.91 0 0 1-2.85 2.323Zm4.781-3.495h-.742a4.066 4.066 0 0 0-1.389-2.74h3.759L8.862 8.563Zm7.057 3.495a2.909 2.909 0 0 1-1.96-5.057c.721 1.378 1.425 2.404 1.478 2.481a.586.586 0 1 0 .965-.666c-.013-.018-.722-1.052-1.432-2.416a2.909 2.909 0 1 1 .949 5.658Z" fill="currentColor" /></svg>;
  }

  if (name === "duration") {
    return <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.438.125a7.313 7.313 0 1 0 0 14.625 7.313 7.313 0 0 0 0-14.625Zm0 13.163a5.85 5.85 0 1 1 0-11.7 5.85 5.85 0 0 1 0 11.7Zm2.266-5.39-1.535-.885V3.781a.731.731 0 1 0-1.463 0v3.656c0 .244.122.472.326.607l1.927 1.127a.731.731 0 1 0 .745-1.273Z" fill="currentColor" /></svg>;
  }

  return <svg width="18" height="18" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M63 41H13a1 1 0 0 1-1-1V12a1 1 0 0 1 1-1h50a1 1 0 0 1 1 1v28a1 1 0 0 1-1 1ZM14 39h48V13H14v26Z" fill="currentColor" /><path d="M39 31h-2a3 3 0 0 1-3-3h2a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2h-2a3 3 0 0 1 0-6h2a3 3 0 0 1 3 3h-2a1 1 0 0 0-1-1h-2a1 1 0 0 0 0 2h2a3 3 0 0 1 0 6Z" fill="currentColor" /><path d="M38 37a11 11 0 1 1 0-22 11 11 0 0 1 0 22Zm0-20a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM51 53H1a1 1 0 0 1-1-1V24a1 1 0 0 1 1-1h6v2H2v26h48v-5h2v6a1 1 0 0 1-1 1Z" fill="currentColor" /></svg>;
}

function DropdownIcon() {
  return <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 0 6 7.5 0 0h12Z" fill="currentColor" /></svg>;
}

function SearchIcon() {
  return <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m18.171 16.084-3.484-3.485a7.86 7.86 0 1 0-1.587 1.587l3.485 3.486a1.122 1.122 0 0 0 1.586-1.588ZM8.409 13.514a5.606 5.606 0 1 1 0-11.212 5.606 5.606 0 0 1 0 11.212Z" fill="currentColor" /></svg>;
}

type SearchFieldProps = (typeof fields)[number] & {
  selectedValue: string;
  open: boolean;
  onToggle: () => void;
  onSelect: (option: string) => void;
};

function SearchField({ label, value, name, options, selectedValue, open, onToggle, onSelect }: SearchFieldProps) {
  return (
    <div className={`custom-select${open ? " active" : ""}`}>
      <p className="tag">{label}</p>
      <span className="icon" aria-hidden="true"><FieldIcon name={name} /></span>
      <span className="dropdown-icon" aria-hidden="true"><DropdownIcon /></span>
      <div className="custom-select-trigger" role="button" tabIndex={0} onClick={onToggle} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") onToggle(); }}>
        {selectedValue || value}
      </div>
      <ul className="custom-options" style={{ height: open ? "250px" : "0" }}>
        {options.map((option, index) => (
          <li className={`option${selectedValue === option ? " selected" : ""}`} data-value={index + 1} key={option} onClick={() => onSelect(option)}>{option}</li>
        ))}
      </ul>
      <input type="hidden" name={name} value={selectedValue} readOnly />
    </div>
  );
}

export default function BannerOne() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [openField, setOpenField] = useState<string | null>(null);
  const [selectedValues, setSelectedValues] = useState<Record<string, string>>(() => Object.fromEntries(fields.map((field) => [field.name, field.value])));
  useSwiper(sliderRef, bannerSliderOptions);

  const selectValue = (name: string, value: string) => {
    setSelectedValues((current) => ({ ...current, [name]: value }));
    setOpenField(null);
  };

  return (
    <div className="rts-banner-area-one slider-banner">
      <div className="swiper banner-slider-active" ref={sliderRef}>
        <div className="swiper-wrapper">
          {banners.map((banner) => (
            <div className="swiper-slide" key={banner}>
              <div className="rts-hero-banner bg" data-bg-src={banner} style={{ backgroundImage: `url(${banner})`, backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat" }} />
            </div>
          ))}
        </div>
      </div>

      <div className="rts__section advance__search__section is__home__one">
        <div className="section-title-area center-style">
          <p className="sub-title cw">Travel Smart, Travel Better</p>
          <h1 className="section-title cw">Find your next stay</h1>
        </div>
        <div className="form-area">
          {fields.map((field) => <SearchField key={field.name} {...field} selectedValue={selectedValues[field.name]} open={openField === field.name} onToggle={() => setOpenField(openField === field.name ? null : field.name)} onSelect={(option) => selectValue(field.name, option)} />)}
          <div className="button-area">
            <a href="#tours" className="rts-btn btn-primary"><SearchIcon />Search</a>
          </div>
        </div>
      </div>

      <div className="swiper-pagination-area">
        <div className="slider-dots"></div>
      </div>
    </div>
  );
}
