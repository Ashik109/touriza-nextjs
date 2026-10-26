export default function Search() {
  return (
  <div className="rts__section advance__search__section is__home__one home-hiking inner">
    <div className="container">
      <div className="form-area" data-aos="fade-up" data-aos-delay="600">
        <div className="custom-select">
          <p className="tag">
            Destination
          </p>
          <span className="dropdown-icon">
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0L6 7.5L0 0H12Z" fill="#BA6827"></path>
            </svg>
          </span>
          <div className="custom-select-trigger">
            All Location
          </div>
          <ul className="custom-options">
            <li className="option selected" data-value="1">
              Bhutan
            </li>
            <li className="option" data-value="2">
              London
            </li>
            <li className="option" data-value="3">
              Maldives
            </li>
            <li className="option" data-value="4">
              Nepal
            </li>
            <li className="option" data-value="5">
              Argentina
            </li>
            <li className="option" data-value="6">
              Dubai
            </li>
            <li className="option" data-value="7">
              Canada
            </li>
            <li className="option" data-value="8">
              Indonesia
            </li>
            <li className="option" data-value="9">
              China
            </li>
            <li className="option" data-value="10">
              Sri Lanka
            </li>
          </ul>
          <input type="hidden" name="adult" defaultValue="1" />
        </div>
        <div className="custom-select">
          <p className="tag">
            Trip Types
          </p>
          <span className="dropdown-icon">
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0L6 7.5L0 0H12Z" fill="#BA6827"></path>
            </svg>
          </span>
          <div className="custom-select-trigger">
            Activities
          </div>
          <ul className="custom-options">
            <li className="option selected" data-value="1">
              Hiking
            </li>
            <li className="option" data-value="2">
              Air Ballon
            </li>
            <li className="option" data-value="3">
              Jungle Safari
            </li>
            <li className="option" data-value="4">
              Paragliding
            </li>
            <li className="option" data-value="5">
              SightSeeing
            </li>
            <li className="option" data-value="6">
              Peak Climbing
            </li>
            <li className="option" data-value="7">
              Scuba Diving
            </li>
            <li className="option" data-value="8">
              Travel
            </li>
            <li className="option" data-value="9">
              SightSeeing
            </li>
            <li className="option" data-value="10">
              SightSeeing
            </li>
          </ul>
          <input type="hidden" name="child" defaultValue="1" />
        </div>
        <div className="custom-select">
          <p className="tag">
            Duration
          </p>
          <span className="dropdown-icon">
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0L6 7.5L0 0H12Z" fill="#BA6827"></path>
            </svg>
          </span>
          <div className="custom-select-trigger">
            3 Days - 10 Days
          </div>
          <ul className="custom-options">
            <li className="option selected" data-value="1">
              1 Days - 3 Days
            </li>
            <li className="option" data-value="2">
              4 Days - 5 Days
            </li>
            <li className="option" data-value="3">
              5 Days - 6 Days
            </li>
            <li className="option" data-value="4">
              6 Days - 7 Days
            </li>
            <li className="option" data-value="5">
              7 Days - 8 Days
            </li>
            <li className="option" data-value="6">
              8 Days - 9 Days
            </li>
            <li className="option" data-value="7">
              9 Days - 10 Days
            </li>
            <li className="option" data-value="8">
              10 Days - 11 Days
            </li>
          </ul>
          <input type="hidden" name="child" defaultValue="1" />
        </div>
        <div className="custom-select">
          <p className="tag">
            Budget
          </p>
          <span className="dropdown-icon">
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0L6 7.5L0 0H12Z" fill="#BA6827"></path>
            </svg>
          </span>
          <div className="custom-select-trigger">
            $699 - $2,000
          </div>
          <ul className="custom-options">
            <li className="option selected" data-value="1">
              $699 - $2,000
            </li>
            <li className="option" data-value="2">
              $799 - $2,200
            </li>
            <li className="option" data-value="3">
              $899 - $2,400
            </li>
            <li className="option" data-value="4">
              $999 - $2,500
            </li>
            <li className="option" data-value="5">
              $1099 - $2,600
            </li>
            <li className="option" data-value="6">
              $1199 - $2,800
            </li>
            <li className="option" data-value="7">
              $1299 - $2,900
            </li>
            <li className="option" data-value="8">
              $1399 - $3,000
            </li>
          </ul>
          <input type="hidden" name="child" defaultValue="1" />
        </div>
        <div className="button-area">
          <a href="#" className="rts-btn btn-primary border">
            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_964_5526)">
                <path d="M18.171 16.0839L14.6871 12.5986C17.2939 9.115 16.5831 4.17775 13.0996 1.57096C9.61598 -1.03583 4.67873 -0.325041 2.07194 3.15854C-0.534851 6.64212 0.175936 11.5794 3.65952 14.1862C6.45782 16.2802 10.3012 16.2802 13.0996 14.1862L16.5849 17.6715C17.0229 18.1095 17.733 18.1095 18.171 17.6715C18.609 17.2335 18.609 16.5234 18.171 16.0854L18.171 16.0839ZM8.40858 13.5135C5.31254 13.5135 2.80273 11.0036 2.80273 7.90761C2.80273 4.81157 5.31254 2.30176 8.40858 2.30176C11.5046 2.30176 14.0144 4.81157 14.0144 7.90761C14.0111 11.0022 11.5033 13.5102 8.40858 13.5135Z" fill="white"></path>
              </g>
              <defs>
                <clipPath id="clip0_964_5526">
                  <rect width="18" height="18" fill="white" transform="translate(0.5)"></rect>
                </clipPath>
              </defs>
            </svg>
             Search 
          </a>
        </div>
      </div>
    </div>
  </div>
  );
}
