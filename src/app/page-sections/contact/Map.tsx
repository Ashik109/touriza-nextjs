import type { CSSProperties } from "react";

export default function Map() {
  return (
  <div className="rts-map-area">
    <div className="container">
      <div className="contact-map-area-fluid">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14881.10813512346!2d92.05130130003461!3d21.28584316293776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1761018831728!5m2!1sen!2sbd" width="600" height="600" style={{ "border": "0" } as CSSProperties} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </div>
  );
}
