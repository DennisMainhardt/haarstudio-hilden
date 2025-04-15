
import React from "react";
import { MapPin } from "lucide-react";

const GoogleMap = () => {
  return (
    <div className="w-full h-full min-h-[400px] rounded-xl overflow-hidden shadow-lg relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5003.185718803846!2d6.930036351448942!3d51.171295013882464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8cd72636dc69d%3A0xa9ccfa808ffe87d2!2sHS%20Haarstudio!5e0!3m2!1sde!2sde!4v1744590709492!5m2!1sde!2sde"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="by Haarstudio Hava Sarikaya Standort"
        className="absolute inset-0"
      ></iframe>

    </div>
  );
};

export default GoogleMap;
