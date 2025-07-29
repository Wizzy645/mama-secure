'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'

export default function SuperEnergyHomepage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const servicesCarouselRef = useRef<HTMLDivElement>(null)
  const projectsCarouselRef = useRef<HTMLDivElement>(null)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const scrollCarousel = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = 320 // Card width + gap
      const currentScroll = ref.current.scrollLeft
      const newScroll = direction === 'left'
        ? currentScroll - scrollAmount
        : currentScroll + scrollAmount

      ref.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div>
      {/* Navigation */}
      <div className="navigation">
        <Image
          src="https://api.builder.io/api/v1/image/assets/TEMP/49b060efff12e31ab432a3d5633b7a80c6d84c5f"
          alt="Super Energy Logo Icon"
          width={104}
          height={63}
          className="logo-icon"
        />
        <Image
          src="https://api.builder.io/api/v1/image/assets/TEMP/884b9ca052e00751a7602d624809b8eb499ff42d"
          alt="Super Energy Logo Text"
          width={104}
          height={32}
          className="logo-text"
        />
        
        <nav className="desktop-nav">
          <div className="nav-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#projects" className="nav-link">Our Projects</a>
            <a href="#investors" className="nav-link">Investors</a>
            <a href="#sustainability" className="nav-link">Sustainability</a>
            <a href="#business" className="nav-link">Our Business</a>
          </div>
        </nav>

        <button
          className="mobile-menu-btn"
          onClick={toggleMobileMenu}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault()
              toggleMobileMenu()
            }
          }}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <i className="ti ti-menu-2"></i>
        </button>
      </div>

      {/* Hero Section */}
      <div className="hero-section">
        <Image
          src="https://api.builder.io/api/v1/image/assets/TEMP/203d29105ef71ea84a5836f3c52e99a1b753c426"
          alt="Energy facility background"
          width={1711}
          height={1077}
          className="hero-bg-image"
        />
        
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome To The Super Energy ltd.
          </h1>
          <p className="hero-description">
            The official plug for all your renewable resources, made with love
            with people who knows how - The natives!!!
          </p>
          
          <button className="cta-button">
            <span className="cta-text">Contact us</span>
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.6689 7.01904L21.8603 13.2104L15.6689 19.4018" stroke="black" strokeWidth="1.53" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4.52002 13.2104H21.6866" stroke="black" strokeWidth="1.53" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="social-links">
            <div className="social-icon-frame">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5004 9.70633V12.6643H17.1524C17.3564 12.6643 17.4584 12.8683 17.4584 13.0723L17.0504 15.0103C17.0504 15.1123 16.8464 15.2143 16.7444 15.2143H14.5004V22.6603H11.4404V15.3163H9.70639C9.50239 15.3163 9.40039 15.2143 9.40039 15.0103V13.0723C9.40039 12.8683 9.50239 12.7663 9.70639 12.7663H11.4404V9.40033C11.4404 7.66633 12.7664 6.34033 14.5004 6.34033H17.2544C17.4584 6.34033 17.5604 6.44233 17.5604 6.64633V9.09433C17.5604 9.29833 17.4584 9.40033 17.2544 9.40033H14.8064C14.6024 9.40033 14.5004 9.50233 14.5004 9.70633Z" stroke="#F16214" strokeWidth="1.53" strokeMiterlimit="10" strokeLinecap="round" />
                <path d="M15.5203 22.6603H9.40025C4.30025 22.6603 2.26025 20.6203 2.26025 15.5203V9.40025C2.26025 4.30025 4.30025 2.26025 9.40025 2.26025H15.5203C20.6203 2.26025 22.6603 4.30025 22.6603 9.40025V15.5203C22.6603 20.6203 20.6203 22.6603 15.5203 22.6603Z" stroke="#F16214" strokeWidth="1.53" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="social-icon-frame">
              <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.80016 22.6603H15.9202C21.0202 22.6603 23.0602 20.6203 23.0602 15.5203V9.40025C23.0602 4.30025 21.0202 2.26025 15.9202 2.26025H9.80016C4.70016 2.26025 2.66016 4.30025 2.66016 9.40025V15.5203C2.66016 20.6203 4.70016 22.6603 9.80016 22.6603Z" stroke="#F16214" strokeWidth="1.53" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12.86 16.0301C14.8317 16.0301 16.43 14.4318 16.43 12.4601C16.43 10.4885 14.8317 8.89014 12.86 8.89014C10.8884 8.89014 9.29004 10.4885 9.29004 12.4601C9.29004 14.4318 10.8884 16.0301 12.86 16.0301Z" stroke="#F16214" strokeWidth="1.53" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18.6088 7.3601H18.6206" stroke="#F16214" strokeWidth="2.04" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="social-icon-frame">
              <svg width="44" height="43" viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.839844" y="0.0400391" width="42.84" height="42.84" rx="21.42" fill="white" />
                <path d="M21.7406 17.1252C21.7406 15.0214 23.5097 13.2715 25.6134 13.3002C26.3502 13.3087 27.0688 13.5298 27.6829 13.9369C28.297 14.344 28.7804 14.9199 29.0751 15.5952H32.4506L29.3619 18.6838C29.1626 21.7865 27.7892 24.6967 25.5209 26.8229C23.2526 28.9491 20.2597 30.1317 17.1506 30.1302C14.0906 30.1302 13.3256 28.9827 13.3256 28.9827C13.3256 28.9827 16.3856 27.8352 17.9156 25.5402C17.9156 25.5402 11.7956 22.4802 13.3256 14.0652C13.3256 14.0652 17.1506 17.8902 21.7406 18.6552V17.1252Z" stroke="#F16214" strokeWidth="2.04" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="social-icon-frame">
              <svg width="44" height="43" viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.240234" y="0.0400391" width="42.84" height="42.84" rx="21.42" fill="white" />
                <path d="M29.31 12.2798H13.245C12.8225 12.2798 12.48 12.6223 12.48 13.0448V29.1098C12.48 29.5323 12.8225 29.8748 13.245 29.8748H29.31C29.7325 29.8748 30.075 29.5323 30.075 29.1098V13.0448C30.075 12.6223 29.7325 12.2798 29.31 12.2798Z" stroke="#F16214" strokeWidth="2.04" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20.7676 19.5474V25.6674" stroke="#F16214" strokeWidth="2.04" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17.7075 19.5474V25.6674" stroke="#F16214" strokeWidth="2.04" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20.7676 22.2249C20.7676 21.5147 21.0497 20.8337 21.5518 20.3316C22.0539 19.8295 22.735 19.5474 23.4451 19.5474C24.1552 19.5474 24.8362 19.8295 25.3384 20.3316C25.8405 20.8337 26.1226 21.5147 26.1226 22.2249V25.6674" stroke="#F16214" strokeWidth="2.04" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17.7075 15.4033C18.306 15.4033 18.7915 15.8888 18.7915 16.4873C18.7915 17.0858 18.3061 17.5713 17.7075 17.5713C17.109 17.5713 16.6235 17.0858 16.6235 16.4873C16.6236 15.8888 17.109 15.4033 17.7075 15.4033Z" fill="#F16214" stroke="#F16214" strokeWidth="0.1275" />
              </svg>
            </div>
          </div>
        </div>

        <svg className="pagination-dots" width="145" height="27" viewBox="0 0 145 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="7.14" cy="7.14" r="6.12" transform="matrix(1 0 0 -1 0.400391 21.1606)" stroke="white" strokeWidth="2.04" />
          <circle cx="7.14" cy="7.14" r="6.12" transform="matrix(1 0 0 -1 19.7803 21.1606)" stroke="white" strokeWidth="2.04" />
          <circle cx="7.14" cy="7.14" r="6.12" transform="matrix(1 0 0 -1 39.1606 21.1606)" stroke="white" strokeWidth="2.04" />
          <circle cx="73.3306" cy="13.5103" r="12.24" fill="#FDC62F" stroke="white" strokeWidth="1.02" />
          <circle cx="7.14" cy="7.14" r="6.12" transform="matrix(1 0 0 -1 91.1807 21.1606)" stroke="white" strokeWidth="2.04" />
          <circle cx="7.14" cy="7.14" r="6.12" transform="matrix(1 0 0 -1 110.561 21.1606)" stroke="white" strokeWidth="2.04" />
          <circle cx="7.14" cy="7.14" r="6.12" transform="matrix(1 0 0 -1 129.94 21.1606)" stroke="white" strokeWidth="2.04" />
        </svg>
      </div>

      {/* Services Section */}
      <section className="services-section-wrapper">
        <div className="section-header-centered">
          <h2 className="section-title-dark">Our Services</h2>
          <div className="section-divider-centered"></div>
        </div>

        <div className="carousel-container">
          <button
            className="carousel-button carousel-button-left"
            onClick={() => scrollCarousel(servicesCarouselRef, 'left')}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="services-carousel" ref={servicesCarouselRef}>
            <div className="service-card">
              <Image
                src="https://api.builder.io/api/v1/image/assets/TEMP/917c2e8db40b350608c1932347a054662f563488"
                alt="Oil Extraction"
                width={300}
                height={200}
                className="service-card-image"
              />
              <div className="service-card-content">
                <h3 className="service-card-title">Oil Extraction</h3>
                <div className="service-card-divider"></div>
                <p className="service-card-description">
                  As the world's largest green and clean energy specialist of the
                  printing and typesetting industry. Lorem has been the industry.
                </p>
              </div>
            </div>

            <div className="service-card">
              <Image
                src="https://api.builder.io/api/v1/image/assets/TEMP/d335c9a17b2b6891d555bdbd58dfe146dc1ad382"
                alt="Pipelines Building"
                width={300}
                height={200}
                className="service-card-image"
              />
              <div className="service-card-content">
                <h3 className="service-card-title">Pipelines Building</h3>
                <div className="service-card-divider"></div>
                <p className="service-card-description">
                  As the world's largest green and clean energy specialist of the
                  printing and typesetting industry. Lorem has been the industry.
                </p>
              </div>
            </div>

            <div className="service-card">
              <Image
                src="https://api.builder.io/api/v1/image/assets/TEMP/1db2cc0680337e8a3edbfec599a2945f2bf4d880"
                alt="Oil Refinement"
                width={300}
                height={200}
                className="service-card-image"
              />
              <div className="service-card-content">
                <h3 className="service-card-title">Oil Refinement</h3>
                <div className="service-card-divider"></div>
                <p className="service-card-description">
                  As the world's largest green and clean energy specialist of the
                  printing and typesetting industry. Lorem has been the industry.
                </p>
              </div>
            </div>

            <div className="service-card">
              <Image
                src="https://api.builder.io/api/v1/image/assets/TEMP/917c2e8db40b350608c1932347a054662f563488"
                alt="Renewable Energy"
                width={300}
                height={200}
                className="service-card-image"
              />
              <div className="service-card-content">
                <h3 className="service-card-title">Renewable Energy</h3>
                <div className="service-card-divider"></div>
                <p className="service-card-description">
                  Leading the transition to sustainable energy solutions with
                  cutting-edge technology and environmental responsibility.
                </p>
              </div>
            </div>
          </div>

          <button
            className="carousel-button carousel-button-right"
            onClick={() => scrollCarousel(servicesCarouselRef, 'right')}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <div className="section-header">
          <h2 className="section-title">Our Projects</h2>
          <div className="section-divider"></div>
        </div>

        <div className="carousel-container">
          <button
            className="carousel-button carousel-button-left"
            onClick={() => scrollCarousel(projectsCarouselRef, 'left')}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="projects-carousel" ref={projectsCarouselRef}>
            <div className="project-carousel-card">
              <Image
                src="https://api.builder.io/api/v1/image/assets/TEMP/48bc919086a1514ff55f1eb94121935346dba033"
                alt="Solar Power Plant"
                width={280}
                height={180}
                className="project-carousel-image"
              />
              <div className="project-carousel-info">
                <h4 className="project-carousel-title">Solar Power Plant</h4>
                <p className="project-carousel-category">RENEWABLE ENERGY</p>
              </div>
            </div>

            <div className="project-carousel-card">
              <Image
                src="https://api.builder.io/api/v1/image/assets/TEMP/72fdf36b5329f802072932bc0100788de0a0af58"
                alt="Wind Energy Farm"
                width={280}
                height={180}
                className="project-carousel-image"
              />
              <div className="project-carousel-info">
                <h4 className="project-carousel-title">Wind Energy Farm</h4>
                <p className="project-carousel-category">WIND POWER</p>
              </div>
            </div>

            <div className="project-carousel-card">
              <Image
                src="https://api.builder.io/api/v1/image/assets/TEMP/577dd626e0b8cd0c65801a73239c14a6918163bc"
                alt="Hydroelectric Dam"
                width={280}
                height={180}
                className="project-carousel-image"
              />
              <div className="project-carousel-info">
                <h4 className="project-carousel-title">Hydroelectric Dam</h4>
                <p className="project-carousel-category">HYDRO POWER</p>
              </div>
            </div>

            <div className="project-carousel-card">
              <Image
                src="https://api.builder.io/api/v1/image/assets/TEMP/6a15a7873e2677a5f26b955f5d188fe4ee9066d3"
                alt="Geothermal Plant"
                width={280}
                height={180}
                className="project-carousel-image"
              />
              <div className="project-carousel-info">
                <h4 className="project-carousel-title">Geothermal Plant</h4>
                <p className="project-carousel-category">GEOTHERMAL ENERGY</p>
              </div>
            </div>

            <div className="project-carousel-card">
              <Image
                src="https://api.builder.io/api/v1/image/assets/TEMP/48bc919086a1514ff55f1eb94121935346dba033"
                alt="Smart Grid System"
                width={280}
                height={180}
                className="project-carousel-image"
              />
              <div className="project-carousel-info">
                <h4 className="project-carousel-title">Smart Grid System</h4>
                <p className="project-carousel-category">GRID TECHNOLOGY</p>
              </div>
            </div>

            <div className="project-carousel-card">
              <Image
                src="https://api.builder.io/api/v1/image/assets/TEMP/72fdf36b5329f802072932bc0100788de0a0af58"
                alt="Energy Storage"
                width={280}
                height={180}
                className="project-carousel-image"
              />
              <div className="project-carousel-info">
                <h4 className="project-carousel-title">Energy Storage</h4>
                <p className="project-carousel-category">BATTERY SYSTEMS</p>
              </div>
            </div>
          </div>

          <button
            className="carousel-button carousel-button-right"
            onClick={() => scrollCarousel(projectsCarouselRef, 'right')}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-header">
          <h2 className="about-title">About our industry</h2>
          <div className="about-divider"></div>
        </div>

        <div className="about-content">
          <div className="about-text-container">
            <p className="about-text">
              As the world's largest green and clean energy specialist, Super Energy Ltd.
              has been at the forefront of renewable energy innovation for over two decades.
              We specialize in sustainable energy solutions that power communities while
              protecting our environment.
            </p>
            <p className="about-text">
              Our commitment to excellence drives us to develop cutting-edge technologies
              in solar, wind, hydro, and geothermal energy. We believe in creating a
              sustainable future for generations to come through responsible energy practices
              and innovative solutions.
            </p>
          </div>
          <div className="about-image-container">
            <Image
              src="https://api.builder.io/api/v1/image/assets/TEMP/341893051c3299b3f8d32ccee45043e2ec930d57"
              alt="About our industry"
              width={561}
              height={421}
              className="about-image"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-content-wrapper">
          <h2 className="contact-title">Got any Question?</h2>
          <p className="contact-subtitle">
            Reach out to us . Call us at +1 (347) 849-9047
          </p>

          <form className="contact-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="email-input"
              required
            />
            <button type="submit" className="contact-btn">
              Contact us
            </button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <div className="footer-section">
        <Image
          src="https://api.builder.io/api/v1/image/assets/TEMP/d72df0e28f28ffe70127e0ece67141c805babf14"
          alt="Footer background"
          width={2832}
          height={503}
          className="footer-bg"
        />

        <div className="footer-content">
          <div className="footer-column">
            <p className="footer-label">ABUJA</p>
            <h3 className="footer-heading">Headquarters</h3>
            <div className="footer-divider"></div>

            <div style={{ position: 'absolute', left: '0px', top: '79px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.7241 14.3537L15.1663 12.9115C15.3606 12.7196 15.6063 12.5883 15.8738 12.5334C16.1412 12.4786 16.4188 12.5025 16.6729 12.6024L18.4306 13.3042C18.6874 13.4084 18.9076 13.5863 19.0634 13.8155C19.2192 14.0446 19.3037 14.3148 19.3063 14.5919V17.8112C19.3048 17.9997 19.2652 18.1859 19.1898 18.3587C19.1144 18.5315 19.0048 18.6872 18.8677 18.8166C18.7305 18.9459 18.5686 19.0461 18.3917 19.1112C18.2148 19.1764 18.0266 19.205 17.8383 19.1954C5.52146 18.4292 3.0362 7.99889 2.56619 4.00703C2.54437 3.811 2.56431 3.61257 2.62468 3.4248C2.68506 3.23703 2.78451 3.06417 2.91649 2.91759C3.04847 2.77101 3.20999 2.65404 3.39042 2.57437C3.57085 2.4947 3.76611 2.45414 3.96334 2.45535H7.07314C7.35064 2.45617 7.62155 2.53999 7.85103 2.69604C8.08051 2.85208 8.25806 3.07321 8.36083 3.33098L9.06263 5.08869C9.16581 5.34177 9.19213 5.61964 9.13831 5.88759C9.08449 6.15554 8.95292 6.40169 8.76002 6.5953L7.3178 8.03752C7.3178 8.03752 8.14836 13.6583 13.7241 14.3537Z" fill="white" />
              </svg>
              <span className="footer-info">+234-09-2914307, +234-01-2272383</span>
            </div>

            <div style={{ position: 'absolute', left: '0px', top: '111px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.9367 2.08203C6.18939 2.08203 2.35205 5.94513 2.35205 10.6667C2.35205 12.9435 3.2565 15.127 4.86644 16.737C5.6636 17.5341 6.60996 18.1665 7.6515 18.5979C8.69304 19.0293 9.80935 19.2513 10.9367 19.2513C13.2135 19.2513 15.397 18.3469 17.007 16.737C18.6169 15.127 19.5214 12.9435 19.5214 10.6667C19.5214 9.53933 19.2993 8.42302 18.8679 7.38148C18.4365 6.33994 17.8041 5.39358 17.007 4.59642C16.2098 3.79926 15.2635 3.16692 14.2219 2.7355C13.1804 2.30408 12.0641 2.08203 10.9367 2.08203Z" fill="white" />
              </svg>
              <span className="footer-info">www.superenergy.ng</span>
            </div>

            <div style={{ position: 'absolute', left: '2px', top: '140px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.0509 7.92871V15.2706C19.0509 15.9537 18.7796 16.6087 18.2966 17.0917C17.8136 17.5747 17.1585 17.846 16.4755 17.846H5.14376C4.46072 17.846 3.80566 17.5747 3.32268 17.0917C2.8397 16.6087 2.56836 15.9537 2.56836 15.2706V7.92871L10.548 12.6242C10.6272 12.6709 10.7176 12.6956 10.8096 12.6956C10.9017 12.6956 10.992 12.6709 11.0713 12.6242L19.0509 7.92871ZM16.4755 4.45398C17.1092 4.45388 17.7207 4.68742 18.193 5.10992C18.6653 5.53242 18.9652 6.11423 19.0354 6.74402L10.8096 11.5827L2.58381 6.74402C2.65403 6.11423 2.95397 5.53242 3.42627 5.10992C3.89857 4.68742 4.51006 4.45388 5.14376 4.45398H16.4755Z" fill="white" />
              </svg>
              <span className="footer-info">www.superenergy.ng</span>
            </div>
          </div>

          <div className="footer-column">
            <p className="footer-label">LOCATIONS</p>
            <div className="footer-divider"></div>
            <div style={{ position: 'absolute', left: '322px', top: '67px', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.51499 14.5059C3.11462 12.7444 0 8.47528 0 6.07731C0 3.16791 2.30605 0.809448 5.15079 0.809448C7.99446 0.809448 10.3016 3.16791 10.3016 6.07731C10.3016 8.47528 7.16282 12.7444 5.78659 14.5059C5.45662 14.9257 4.84497 14.9257 4.51499 14.5059ZM5.15079 7.83326C6.09779 7.83326 6.86772 7.04582 6.86772 6.07731C6.86772 5.10879 6.09779 4.32135 5.15079 4.32135C4.2038 4.32135 3.43386 5.10879 3.43386 6.07731C3.43386 7.04582 4.2038 7.83326 5.15079 7.83326Z" fill="white" />
              </svg>
              <span className="footer-info" style={{ width: '266px', height: '63px' }}>
                5, John smith street, off richard samuel Street, wuse, abuja, Nigeria
              </span>
            </div>
          </div>

          <div className="footer-column">
            <p className="footer-label">GET IN TOUCH</p>
            <h3 className="footer-heading">Follow Our Activities</h3>
            <div className="footer-divider"></div>

            <div className="footer-social-icons">
              <div style={{ position: 'absolute', left: '966px', top: '99px' }}>
                <div className="footer-social-bg"></div>
                <svg className="footer-social-icon" style={{ left: '973px', top: '104px', position: 'absolute' }} width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.666504 14.9356C0.666504 21.9196 5.73886 27.7271 12.3729 28.9048V18.7589H8.86095V14.8572H12.3729V11.7351C12.3729 8.2232 14.6357 6.27292 17.8362 6.27292C18.85 6.27292 19.9433 6.42862 20.9571 6.58431V10.1746H19.1625C17.4452 10.1746 17.0554 11.0327 17.0554 12.1261V14.8572H20.8014L20.1775 18.7589H17.0554V28.9048C23.6894 27.7271 28.7617 21.9208 28.7617 14.9356C28.7617 7.16612 22.4403 0.80957 14.7141 0.80957C6.98793 0.80957 0.666504 7.16612 0.666504 14.9356Z" fill="#FDC62F" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
