import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <>
      <div className="about-container">
        {/* About */}
        <div>
          <h1 className="about-header">About Me</h1>
          <br />
          <br />
          <div className="about-paragraph">
            <p>
              I have experience working with
              <br />modern technologies like HTML,
              <br />CSS, TypeScript, and JavaScript,
              <br />and I&apos;m currently expanding my
              <br />skills in Next.js. I enjoy creating
              <br />clean, responsive, and user-
              <br />friendly websites, and I&apos;m always
              <br />eager to learn new tools and
              <br />technologies.
            </p>
          </div>

          {/* Image */}
          <div className="about-image-container">
            <div className="about-image-wrapper">
              <Image
                src="/About.PNG"
                alt="About Me Picture"
                width={250}
                height={250}
                className="about-image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
