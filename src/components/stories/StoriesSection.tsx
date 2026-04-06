'use client';

import { useState } from 'react';
import Link from 'next/link';
import { InstagramCollage } from './InstagramCollage';

const NEWS_FEATURED = {
  title: 'Lawhive raises $60M Series B',
  date: 'Feb 11, 2026',
  description: 'Lawhive, the AI-powered legal services platform, has raised $60M in Series B funding.',
  image: 'https://sequel-prod.imgix.net/newsroom-posts/placeholder.png',
  url: 'https://techcrunch.com/2026/02/11/lawhive-series-b/',
};

const NEWS_ARTICLES = [
  { title: 'Scan.com expands to Europe', date: 'Jan 28, 2026', image: 'https://sequel-prod.imgix.net/newsroom-posts/placeholder.png', url: 'https://scan.com' },
  { title: 'Track Titan raises $12M Series A', date: 'Dec 15, 2025', image: 'https://sequel-prod.imgix.net/newsroom-posts/placeholder.png', url: 'https://tracktitan.com' },
  { title: 'Lucky Energy partners with NFL', date: 'Nov 30, 2025', image: 'https://sequel-prod.imgix.net/newsroom-posts/placeholder.png', url: 'https://luckyenergy.com' },
  { title: 'Wonder Studios launches AI film tools', date: 'Nov 5, 2025', image: 'https://sequel-prod.imgix.net/newsroom-posts/placeholder.png', url: 'https://wonderstudios.com' },
];

const VIDEOS = [
  { title: 'FitWise AI Product Launch', date: 'Feb 18, 2026', playbackId: 'O2gP004tqgHAepDVPdqPfHxja8xnZZjibJNwFYMEOOq8' },
  { title: 'Hollywood is dead', date: 'Jul 11, 2025', playbackId: '8gao51MHgPqme00v4PzxM58XGIcVvAUaFTG6eJJ9Z1MA' },
  { title: 'Scan.com saved my life', date: 'Jul 10, 2025', playbackId: 'IY1oqhpo1L02fePJOAo5qZRGTcfr00v4OdJwpJikgD4y4' },
  { title: 'Changing minds with Slingshot AI', date: 'Jun 19, 2025', playbackId: 'nwqMMN9JgnFKqrKDO1IxrXsCz4OCqnGkaSQD1doOXh00' },
  { title: 'The social fix - Howbout', date: 'Jun 19, 2025', playbackId: '01hTg9IOKlDDLH7CQZlJl3lOc6nAdjnLhkZW01eOrN31s' },
  { title: 'The Polymath & The Prodigy', date: 'Feb 18, 2026', playbackId: 'ignPx5qhHyMZ4X7f00XYSs1zgP3imwAKH01n7R5DWNabI' },
];

const POSTS = [
  { title: 'The real finances of a footballer', date: 'Jan 13, 2026', slug: 'zkBPnO0orqxyklefrWV7' },
  { title: 'Sequel 2025 wrapped', date: 'Jan 5, 2026', slug: 'ZyLtAhJZA1w7FfbR8Kbh' },
  { title: 'Sequel first public interview', date: 'Nov 19, 2025', slug: 'RNVntv2SwyWJYhw1Ua0Q' },
  { title: 'Launch of our social media arm', date: 'Nov 11, 2025', slug: 'vYG4uH7xpy5SoQ6D4Tab' },
  { title: 'Launch of the Founder Files', date: 'Sep 5, 2025', slug: 'sahiISjngi4RSEOXMo5c' },
  { title: 'Presenting at PAC Vegas', date: 'Jun 29, 2025', slug: 'ae3L7K3tV1yNvW9om1k2' },
];

function PlayIcon() {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="25" cy="25" r="24" stroke="white" strokeWidth="2" />
      <polygon points="21,17 35,25 21,33" fill="white" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12H19" />
      <path d="M13 6L19 12L13 18" />
    </svg>
  );
}

export function StoriesSection() {
  const [activeTab, setActiveTab] = useState<'socials' | 'newsroom'>('socials');

  return (
    <section className="section storiesSection1">
      <div className="header storiesSection1Header">
        <h1 className="title storiesSection1Title">
          Stories of those who{' '}
          <span className="titleItalic storiesSection1TitleItalic">defy</span>{' '}
          the odds.
        </h1>

        {/* Tabs */}
        <div className="tabs">
          <div className={`glass tab ${activeTab === 'socials' ? 'is-selected' : ''}`}>
            <button type="button" className="tabButton" onClick={() => setActiveTab('socials')}>
              <span className="tabText">Socials</span>
            </button>
          </div>
          <div className={`glass tab ${activeTab === 'newsroom' ? 'is-selected' : ''}`}>
            <button type="button" className="tabButton" onClick={() => setActiveTab('newsroom')}>
              <span className="tabText">Newsroom</span>
            </button>
          </div>
        </div>
      </div>

      <div className="panels">
        {/* Socials Panel */}
        <div className="panel" id="panel-socials" hidden={activeTab !== 'socials'}>
          <div className="panelContainer">
            <div className="panelContent">
              {/* Social icons row */}
              <div className="flex items-center justify-center gap-5 py-6">
                <a href="https://instagram.com/sequeloriginals" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="stories-social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="2" />
                    <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
                  </svg>
                </a>
                <a href="https://www.tiktok.com/@sequeloriginals" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="stories-social-icon">
                  <svg width="18" height="20" viewBox="0 0 14 16" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.0833 0H7.66667V10.9333C7.66667 12.1333 6.7 13.1111 5.5 13.1111C4.3 13.1111 3.33333 12.1333 3.33333 10.9333C3.33333 9.75556 4.27778 8.8 5.43333 8.75556V6.31111C2.93333 6.35556 0.916667 8.4 0.916667 10.9333C0.916667 13.4889 2.97778 15.5556 5.47778 15.5556C7.97778 15.5556 10.0833 13.4667 10.0833 10.9333V5.33333C11.0278 6.02222 12.1722 6.4 13.3611 6.42222V3.97778C11.4944 3.91111 10.0833 2.13333 10.0833 0Z" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/@sequeloriginals" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="stories-social-icon">
                  <svg width="22" height="16" viewBox="0 0 22 16" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.5819 2.51049C21.3376 1.58364 20.6157 0.855249 19.6972 0.608688C17.9914 0.166672 11.2 0.166672 11.2 0.166672C11.2 0.166672 4.40857 0.166672 2.70279 0.608688C1.78429 0.855249 1.06239 1.58364 0.818104 2.51049C0.380371 4.23103 0.380371 7.83334 0.380371 7.83334C0.380371 7.83334 0.380371 11.4356 0.818104 13.1562C1.06239 14.083 1.78429 14.8114 2.70279 15.058C4.40857 15.5 11.2 15.5 11.2 15.5C11.2 15.5 17.9914 15.5 19.6972 15.058C20.6157 14.8114 21.3376 14.083 21.5819 13.1562C22.0196 11.4356 22.0196 7.83334 22.0196 7.83334C22.0196 7.83334 22.0196 4.23103 21.5819 2.51049ZM9.03037 11.2083V4.45834L14.6529 7.83334L9.03037 11.2083Z" />
                  </svg>
                </a>
                <a href="https://x.com/joinsequel" target="_blank" rel="noopener noreferrer" aria-label="X" className="stories-social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/sequel-yourlegacymade" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="stories-social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.27071 22.9165H1.46977V8.50183H6.27071V22.9165ZM3.87037 6.53082H3.83912C2.22813 6.53082 1.18555 5.42171 1.18555 4.03271C1.18555 2.61479 2.25763 1.53711 3.89987 1.53711C5.54212 1.53711 6.55537 2.61479 6.58662 4.03271C6.58662 5.42171 5.54212 6.53082 3.87037 6.53082ZM23.5836 22.9165H18.7832V15.2176C18.7832 13.2756 18.0879 11.9511 16.3504 11.9511C15.0252 11.9511 14.2343 12.845 13.8871 13.7078C13.7602 14.0171 13.7292 14.448 13.7292 14.8795V22.9165H8.92861C8.92861 22.9165 8.99134 9.8556 8.92861 8.50183H13.7292V10.5469C14.3672 9.56568 15.5091 8.1641 18.0532 8.1641C21.2078 8.1641 23.5836 10.2303 23.5836 14.6628V22.9165Z" />
                  </svg>
                </a>
              </div>

              <InstagramCollage />
            </div>
          </div>
        </div>

        {/* Newsroom Panel */}
        <div className="panel" id="panel-newsroom" hidden={activeTab !== 'newsroom'}>
          <div className="panelContainer">
            <div className="panelContent" style={{ maxWidth: '1200px', width: '100%' }}>
              {/* News Section */}
              <div className="featuredSection">
                <div className="featuredSectionHeader">
                  <div className="featuredSubtitle">
                    <h2 className="subtitleItalic" style={{ fontSize: 'clamp(1.2rem, 1.5vw, 1.5rem)', paddingLeft: 0, paddingRight: 0 }}>News</h2>
                  </div>
                  <Link href="/news" className="viewAllButton">
                    View all <ArrowIcon />
                  </Link>
                </div>
                <div className="featuredSectionContent">
                  <div className="featured featuredArticles">
                    <div className="featureContainer">
                      <a href={NEWS_FEATURED.url} target="_blank" rel="noopener noreferrer" className="feature">
                        <img src={NEWS_FEATURED.image} alt="" className="featureImage" />
                        <div className="featureBadge">
                          <div className="glass badge">
                            <span className="badgeText">News</span>
                          </div>
                        </div>
                        <div className="featureContent">
                          <h3 className="featureTitle">{NEWS_FEATURED.title}</h3>
                          <p className="featureDescription">{NEWS_FEATURED.description}</p>
                          <span className="featureDate">{NEWS_FEATURED.date}</span>
                        </div>
                      </a>
                    </div>
                    <div className="articles">
                      {NEWS_ARTICLES.map((article) => (
                        <a key={article.title} href={article.url} target="_blank" rel="noopener noreferrer" className="article">
                          <img src={article.image} alt="" className="articleImage" />
                          <div className="articleContent">
                            <h4 className="articleTitle">{article.title}</h4>
                            <span className="articleDate">{article.date}</span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Videos Section */}
              <div className="featuredSection">
                <div className="featuredSectionHeader">
                  <div className="featuredSubtitle">
                    <h2 className="subtitleItalic" style={{ fontSize: 'clamp(1.2rem, 1.5vw, 1.5rem)', paddingLeft: 0, paddingRight: 0 }}>Videos</h2>
                  </div>
                  <Link href="/videos" className="viewAllButton">
                    View all <ArrowIcon />
                  </Link>
                </div>
                <div className="featuredSectionContent featuredVideos videosCarousel">
                  {VIDEOS.map((video) => (
                    <button
                      key={video.playbackId}
                      type="button"
                      className="videoContainer"
                      data-playback-id={video.playbackId}
                    >
                      <div className="video">
                        <img
                          src={`https://image.mux.com/${video.playbackId}/thumbnail.webp?width=800&time=1`}
                          alt=""
                          className="videoImage"
                        />
                        <div className="videoPlay">
                          <PlayIcon />
                        </div>
                        <div className="videoBadge">
                          <div className="glass badge">
                            <span className="badgeText">Video</span>
                          </div>
                        </div>
                        <div className="videoContent">
                          <h3 className="videoTitle">{video.title}</h3>
                          <span className="videoDate">{video.date}</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Posts Section */}
              <div className="featuredSection featuredPosts">
                <div className="featuredSectionHeader">
                  <div className="featuredSubtitle">
                    <h2 className="subtitleItalic" style={{ fontSize: 'clamp(1.2rem, 1.5vw, 1.5rem)', paddingLeft: 0, paddingRight: 0 }}>Posts</h2>
                  </div>
                  <Link href="/posts" className="viewAllButton">
                    View all <ArrowIcon />
                  </Link>
                </div>
                <div className="featuredSectionContent">
                  <div className="posts featuredPostsGrid">
                    {POSTS.map((post) => (
                      <Link key={post.slug} href={`/stories/${post.slug}`} className="post">
                        <img
                          src="https://sequel-prod.imgix.net/newsroom-posts/placeholder.png"
                          alt=""
                          className="postImage"
                        />
                        <div className="postContent">
                          <h3 className="postTitle">{post.title}</h3>
                          <span className="postDate">{post.date}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
