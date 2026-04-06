'use client';

const SHOWREEL_PLAYBACK_ID = 'Vmmk01Bp7I1rS01luZ01R8LU01bfrb1UjFhKQCcSvCz8HXk';

const SERVICES = [
  {
    title: 'Documentaries',
    image: '/images/founders/documentary.png',
    description:
      'Sequel Originals are premium documentary films that tell the untold stories of ambitious founders building category-defining companies.',
  },
  {
    title: 'Brand Films',
    image: '/images/founders/filming.png',
    description:
      "We help bring your brand's story to life through cinematic brand films that capture your mission, vision and culture.",
  },
  {
    title: 'Launch Videos',
    image: '/images/founders/launch.png',
    description:
      'We produce launch films that transform product announcements into cultural moments, driving awareness and adoption.',
  },
  {
    title: 'Masterclasses',
    image: '/images/founders/masterclass.png',
    description:
      'We help you turn complex ideas into compelling educational content that positions you as a thought leader in your space.',
  },
  {
    title: 'Testimonials',
    image: '/images/founders/testimonial.png',
    description:
      'We bring your story to life through your users, customers and partners, creating authentic social proof that drives conversion.',
  },
  {
    title: 'Animation',
    image: '/images/founders/animation.png',
    description:
      'We have a team of expert animators who create stunning motion graphics and animated explainers that simplify complex ideas.',
  },
];

export function FoundersSection3() {
  return (
    <div id="section3" className="section section3 foundersSection3">
      <div id="header3" className="header">
        <div className="titleContainer">
          <h2 id="header3Title" className="title header3Title">
            We help ambitious early stage founders craft authentic, high-impact content and open doors to audiences who will accelerate your success.
          </h2>
        </div>
        <button
          id="header3ShowreelButton"
          className="header3ShowreelButton"
          type="button"
          aria-label="Watch showreel"
        >
          <div className="header3ShowreelButtonPlay glass">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="6 3 20 12 6 21 6 3" />
            </svg>
          </div>
          <span className="link" style={{ opacity: 1 }}>Watch showreel</span>
          <div
            className="header3ShowreelButtonVideo"
            dangerouslySetInnerHTML={{
              __html: `<mux-video
                playback-id="${SHOWREEL_PLAYBACK_ID}"
                stream-type="on-demand"
                metadata-video-title="Showreel preview"
                aria-hidden="true"
                class="w-full h-full"
                style="--media-object-fit: contain; --media-object-position: center"
                tabindex="-1"
                autoplay="true"
                muted="true"
                loop="true"
                min-resolution="360p"
                max-resolution="720p"
                preload="none"
                playsinline="true"
              ></mux-video>`,
            }}
          />
        </button>
      </div>

      <div id="servicesWrapper" className="servicesWrapper">
        <div id="services" className="services">
          {SERVICES.map((service, i) => (
            <div key={service.title} className="service" data-card-index={i}>
              <div className="serviceContent">
                <img
                  src={service.image}
                  alt={service.title}
                  className="serviceImage"
                  loading="lazy"
                  decoding="async"
                />
                <div className="serviceText">
                  <div className="glass badge">
                    <span className="badgeText">{service.title}</span>
                  </div>
                  <p className="serviceDescription">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="servicesNavigation">
          <button
            id="servicesArrowLeft"
            className="arrowButton"
            aria-label="Previous service"
            disabled
          >
            <div className="glass" style={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5" />
                <path d="M12 19l-7-7 7-7" />
              </svg>
            </div>
          </button>
          <button
            id="servicesArrowRight"
            className="arrowButton"
            aria-label="Next service"
          >
            <div className="glass" style={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12H19" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
