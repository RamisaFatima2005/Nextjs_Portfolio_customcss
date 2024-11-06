import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="home-container">
        {/* Intro */}
        <div className="home-intro">
          <div className="home-text">
            <p>
              Hii, I&apos;m <b>Ramisa Fatima,</b>
              <br />
              <br />
              an aspiring AI engineer with a
              <br /> passion for building clean, responsive
              <br /> web applications. Dive into my work
              <br />and see how I blend creativity with
              <br />technology.
            </p>
          </div>

          {/* Image */}
          <div className="home-image-container">
            <div>
              <Image
                src="/Profile.webp"
                alt="Profile Picture"
                width={250}
                height={250}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
