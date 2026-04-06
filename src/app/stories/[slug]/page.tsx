import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ShareSection } from '@/components/stories/ShareSection';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const STORIES = [
  { slug: 'zkBPnO0orqxyklefrWV7', badge: 'POSTS', title: 'The real finances of a footballer', date: 'JANUARY 13, 2026', body: '<p>A conversation I had with Alex Macdonald when I took my first steps into the world of VC with Velocity Black - his first company &amp; the first venture opportunity I ever invested in.</p><p>Fast forward 8 years and he has built multiple companies, exited one, invested in over 30 startups and now finds himself on the other side of the table running a $120m fund.</p><p>This conversation was really insightful for me and I hope it is for you too.</p>' },
  { slug: 'ZyLtAhJZA1w7FfbR8Kbh', badge: 'POSTS', title: 'Sequel 2025 wrapped', date: 'JANUARY 5, 2026', body: '<p>This year we...</p><p>Grew assets under management by 4.4x</p><p>Celebrated 5 markups across the portfolio</p><p>Had our first portfolio company cross $100M in ARR</p><p>Welcomed 174 new sequel members</p><p>Grew the team to 28</p><p>Launched senna (our AI-sourcing engine)</p><p>Expanded to 3 offices — London, New York, Miami</p>' },
  { slug: 'RNVntv2SwyWJYhw1Ua0Q', badge: 'POSTS', title: 'Sequel first public interview', date: 'NOVEMBER 19, 2025', body: '<p>Alberto Tenconi sat down for his first public interview to discuss the founding of Sequel, the vision for the company, and the future of athlete investing.</p>' },
  { slug: 'vYG4uH7xpy5SoQ6D4Tab', badge: 'POSTS', title: 'Launch of our social media arm', date: 'NOVEMBER 11, 2025', body: '<p>My team have constantly harassed me for 2 years to do this. I finally gave in.</p><p>Excited to share the launch of our media arm at sequel. A space where our members, founders, and team can share their stories, insights, and experiences.</p>' },
  { slug: 'sahiISjngi4RSEOXMo5c', badge: 'POSTS', title: 'Launch of the Founder Files', date: 'SEPTEMBER 5, 2025', body: '<p>This summer, the sequel team conducted the largest quantitative analysis of pitch decks to date using the PitchBook platform, analyzing over 200 startups to identify what separates good pitch decks from great ones.</p>' },
  { slug: 'ae3L7K3tV1yNvW9om1k2', badge: 'POSTS', title: 'Presenting at PAC Vegas', date: 'JUNE 29, 2025', body: '<p>Enjoyed my time in Las Vegas this week working with some of the best players, past &amp; present, in the NBA on building a legacy through investing with the NBPA.</p>' },
  { slug: 'X1ktLMB9nmP4nBnbxL2r', badge: 'POSTS', title: 'Austin event', date: 'MARCH 1, 2025', body: '<p>What do Superbowl winners, unicorn founders and the talent investors who spot them have in common?</p><p>Quite a lot it turns out. We hosted our first event in Austin, Texas, bringing together some of the most impressive people in sports, tech, and venture capital.</p>' },
  { slug: 'f2lV0oqLZ7QxHP0y0pZ6', badge: 'POSTS', title: 'Meet our US Director of Athlete Relations', date: 'JANUARY 28, 2025', body: '<p>Austin brings over a decade of experience in athlete management and investments. Most recently, he has worked with NBA star Kyle Kuzma as his business manager.</p>' },
  { slug: 'LuWwDsBdI2MBoak8G29n', badge: 'POSTS', title: 'Meet our new Backend Developer', date: 'JANUARY 5, 2025', body: '<p>Will is best known for his years competing at the highest level of sabre fencing for Great Britain, winning Team GB\'s first-ever men\'s sabre medal at the European Games in Krakow (2023).</p>' },
  { slug: 'wsnLEu7pBmyfW15TMdDK', badge: 'POSTS', title: 'Introducing Senna', date: 'SEPTEMBER 9, 2024', body: '<p>In the past year at sequel we have sourced 10,000 startups, looked at 1,354 in detail and made investments in 15 of them. Senna is our AI-powered sourcing engine that helps us find the best startups in the world.</p>' },
  { slug: 'U5dEtO8NuaX7W5Zjmk02', badge: 'POSTS', title: 'Sequel launch party', date: 'APRIL 23, 2024', body: '<p>On Tuesday 23rd of April we were thrilled to host the sequel launch party in our London offices in Westminster.</p>' },
  { slug: 'zF1CAHU9e3Tf4EAByGqg', badge: 'POSTS', title: 'Meet our new VP of Operations', date: 'JANUARY 6, 2024', body: '<p>Sophie has over 15 years of experience in operational leadership across finance, tech, and sports. She joins sequel to oversee all operational aspects of the business.</p>' },
];

export function generateStaticParams() {
  return STORIES.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const story = STORIES.find((s) => s.slug === slug);
  if (!story) return {};
  return {
    title: story.title,
    description: `${story.title} - ${story.date}`,
  };
}

function SocialSidebar() {
  return (
    <div className="storySocialSidebar">
      <a
        href="#"
        className="storySocialLink"
        aria-label="Share on X"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
        </svg>
      </a>
      <a
        href="https://instagram.com/sequeloriginals"
        className="storySocialLink"
        aria-label="Instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="2" />
          <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2" />
          <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/company/sequel-yourlegacymade"
        className="storySocialLink"
        aria-label="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.27071 22.9165H1.46977V8.50183H6.27071V22.9165ZM3.87037 6.53082H3.83912C2.22813 6.53082 1.18555 5.42171 1.18555 4.03271C1.18555 2.61479 2.25763 1.53711 3.89987 1.53711C5.54212 1.53711 6.55537 2.61479 6.58662 4.03271C6.58662 5.42171 5.54212 6.53082 3.87037 6.53082ZM23.5836 22.9165H18.7832V15.2176C18.7832 13.2756 18.0879 11.9511 16.3504 11.9511C15.0252 11.9511 14.2343 12.845 13.8871 13.7078C13.7602 14.0171 13.7292 14.448 13.7292 14.8795V22.9165H8.92861C8.92861 22.9165 8.99134 9.8556 8.92861 8.50183H13.7292V10.5469C14.3672 9.56568 15.5091 8.1641 18.0532 8.1641C21.2078 8.1641 23.5836 10.2303 23.5836 14.6628V22.9165Z" />
        </svg>
      </a>
    </div>
  );
}

export default async function StoryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = STORIES.find((s) => s.slug === slug);

  if (!story) {
    notFound();
  }

  // Get 3 other posts (excluding current)
  const otherPosts = STORIES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <div className="storyPage">
      <Header />
      <main id="main-content">
        {/* Hero */}
        <div className="storyHero">
          <div className="storyHeroBadge">
            <div className="glass badge">
              <span className="badgeText">{story.badge}</span>
            </div>
          </div>
          <h1 className="storyHeroTitle">{story.title}</h1>
          <span className="storyHeroDate">{story.date}</span>
          <div className="storyHeroImageWrapper">
            <img
              src="https://sequel-prod.imgix.net/newsroom-posts/placeholder.png"
              alt=""
              className="storyHeroImage"
            />
          </div>
        </div>

        {/* Article container */}
        <div className="storyArticleContainer">
          <SocialSidebar />
          <div className="storyArticleBody">
            <div
              className="body"
              dangerouslySetInnerHTML={{ __html: story.body }}
            />
            <ShareSection slug={slug} />
          </div>
        </div>

        {/* Other Posts */}
        <div className="otherPostsSection">
          <h2 className="otherPostsTitle">Other posts</h2>
          <div className="postsGrid">
            {otherPosts.map((post) => (
              <Link key={post.slug} href={`/stories/${post.slug}`} className="postCard">
                <div className="postImageWrapper">
                  <img
                    src="https://sequel-prod.imgix.net/newsroom-posts/placeholder.png"
                    alt=""
                    className="postCardImage"
                  />
                  <div className="postImageMask" />
                </div>
                <div className="postCardContent">
                  <h3 className="postCardTitle">{post.title}</h3>
                  <span className="postCardDate">{post.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
