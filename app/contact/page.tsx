import Image from 'next/image';
import React from 'react';

const ContactMe = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1 className="contact-title">CONTACT ME</h1>
        <p className="contact-description">
          I&apos;d love to connect with you! Whether you have questions, want to collaborate on a project, or just want to say hi, feel free to reach out.
        </p>
      </div>

      <div className="contact-grid">
        {/* GitHub */}
        <div className="contact-item">
          <Image src="/github.webp" alt="GitHub" width={64} height={64} className="contact-image" />
          <a
            href="https://github.com/dashboard"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/dashboard
          </a>
        </div>
        {/* LinkedIn */}
        <div className="contact-item">
          <Image src="/linkedin.jpeg" alt="LinkedIn" width={64} height={64} className="contact-image" />
          <a
            href="https://www.linkedin.com/in/ramisa-fatima-8639822b8/"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.linkedin.com/in/ramisa-fatima-8639822b8/
          </a>
        </div>
        {/* Instagram */}
        <div className="contact-item">
          <Image src="/instagram.jpeg" alt="Instagram" width={64} height={64} className="contact-image" />
          <a
            href="https://www.instagram.com/ai_coding.19/?igsh=MWNkDY1enVxZjZ6ZA%3D%3D"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.instagram.com/ai_coding.19/?igsh=MWNkDY1enVxZjZ6ZA%3D%3D
          </a>
        </div>
        {/* Email */}
        <div className="contact-item">
          <Image src="/email.jpeg" alt="Gmail" width={64} height={64} className="contact-image" />
          <p className="contact-email">
            fatimaramisa12@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
