import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { NewsAnimations } from '@/components/news/NewsAnimations';

export const metadata: Metadata = {
  title: 'News',
};

const ARTICLES = [
  { title: 'Lawhive raises $60M Series B', date: 'FEBRUARY 11, 2026', url: 'https://www.globallegalpost.com/news/uk-new-law-start-up-lawhive-secures-fresh-funding-for-us-expansion-1810357469', image: '/imgix/newsroom-articles/2fvh3ok3m1l-lawhive_resized_1__1_.jpg' },
  { title: 'Scan.com recent milestone', date: 'JANUARY 16, 2026', url: 'https://www.thetimes.com/sunday-times-100-tech/software-profile/article/scan-com-s8sh5rqrd', image: '/imgix/newsroom-articles/rrebfqqay6-Mask_group__34_.png' },
  { title: 'Track Titan round annoucement', date: 'DECEMBER 4, 2025', url: 'https://www.tracktitan.io/post/funding-round-track-titan-update-5-million-reasons-to-get-even-more-excited-about-track-titan', image: '/imgix/newsroom-articles/bhvswjumb5-Mask_group__35_.png' },
  { title: 'Lucky Energy Series B', date: 'NOVEMBER 13, 2025', url: 'https://www.foodbev.com/news/lucky-energy-secures-25m-in-oversubscribed-series-b-round-to-fund-nationwide-expansion', image: '/imgix/newsroom-articles/nm2iplzyhsc-Mask_group__36_.png' },
  { title: 'Wonder Studios Seed Round', date: 'OCTOBER 22, 2025', url: 'https://techcrunch.com/2025/10/23/openai-backed-wonder-studios-raised-12m-to-bring-ai-content-to-hollywood/', image: '/imgix/newsroom-articles/mxpm87c2lkc-Mask_group__37_.png' },
  { title: 'Yaso Series A', date: 'SEPTEMBER 20, 2025', url: 'https://goyaso.com/blogs/yaso-raises-11m-usd-series-a-to-accelerate-growth/', image: '/imgix/newsroom-articles/seu3lx9fgcq-Mask_group__38_.png' },
  { title: 'Understory latest round', date: 'SEPTEMBER 7, 2025', url: 'https://understory.io/experience-maker-stories/funding-announcement', image: '/imgix/newsroom-articles/gwnt0g2y93d-Mask_group__39_.png' },
  { title: 'Slingshot secures $93M in funding', date: 'JULY 21, 2025', url: 'https://www.statnews.com/2025/07/22/slingshot-new-investors-generative-ai-mental-health-therapy-chatbot-called-ash/', image: '/imgix/newsroom-articles/oyqeg3bvqhf-Mask_group__40_.png' },
  { title: 'Affiniti latest round led by SignalFire', date: 'MAY 21, 2025', url: 'https://medium.com/affiniti-finance-inc/affiniti-just-raised-17m-to-revive-backbone-american-smbs-e389da195580', image: '/imgix/newsroom-articles/dy67pin359t-Mask_group__41_.png' },
  { title: 'Superpower Series A round', date: 'APRIL 21, 2025', url: 'https://www.forbes.com/sites/dariashunina/2025/04/22/superpower-raises-30m-to-launch-worlds-first-health-super-app/', image: '/imgix/newsroom-articles/jzzouc4o7hi-Mask_group__42_.png' },
  { title: 'AI-powered agent raised $8M on its own', date: 'JANUARY 14, 2025', url: 'https://techcrunch.com/2025/01/14/boardy-ai-raises-8m-seed-round-months-after-closing-pre-seed/', image: '/imgix/newsroom-articles/dxhpdbzs3m-Mask_group__43_.png' },
  { title: 'Howbout annouces new round led by Goodwater Capital', date: 'SEPTEMBER 12, 2024', url: 'https://www.thebaehq.com/news/howbout-calendar-secures-8m-in-series-a-funding-expanding-its-social-time-sharing-network', image: '/imgix/newsroom-articles/5cakk6hnd1t-Mask_group__44_.png' },
];

export default function NewsPage() {
  return (
    <>
      <Header />
      <NewsAnimations />
      <main>
        <div className="newsScrollSpacer">
          <div id="newsArticles" className="newsContainer">
            <div className="newsSubtitle">News</div>
            <div className="newsGrid">
              {ARTICLES.map((a) => (
                <a
                  key={a.url}
                  href={a.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="newsArticle"
                >
                  <img
                    src={a.image}
                    alt={a.title}
                    className="newsArticleImage"
                    loading="lazy"
                  />
                  <div className="newsArticleContent">
                    <h3 className="newsArticleTitle">{a.title}</h3>
                    <p className="newsArticleDate">{a.date}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
