import React from 'react';

const ContactMap = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex border border-gray-900 bg-gray-100">
        <iframe
          className="grayscale w-full h-80"
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184551.8098767711!2d-79.51848422182734!3d43.71840339107499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1640909128901!5m2!1sen!2sca"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactMap;
