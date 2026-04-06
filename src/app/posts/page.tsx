import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PostsAnimations } from '@/components/posts/PostsAnimations';

export const metadata: Metadata = {
  title: 'Posts',
};

const POSTS = [
  { title: 'The real finances of a footballer', date: 'JANUARY 13, 2026', slug: 'zkbpno0orqxyklefrwv7', image: '/imgix/newsroom-posts/vmqaue5snq-rc9m4mRmINJek45Z3kBs8d9U_1.png' },
  { title: 'Sequel 2025 wrapped', date: 'JANUARY 5, 2026', slug: 'zyltahjza1w7ffbr8kbh', image: '/imgix/newsroom-posts/5o5y46c60rp-Group_887959795__23_.png' },
  { title: 'Sequel first public interview', date: 'NOVEMBER 19, 2025', slug: 'rnvntv2swywjyhw1ua0q', image: '/imgix/newsroom-posts/yfp8mvw3p2k-Feature_image__1_.png' },
  { title: 'Launch of our social media arm', date: 'NOVEMBER 11, 2025', slug: 'vyg4uh7xpy5soq6d4tab', image: '/imgix/newsroom-posts/oqmglj3phxe-Group_887959795__24_.png' },
  { title: 'Launch of the Founder Files', date: 'SEPTEMBER 5, 2025', slug: 'sahiisjngi4rseoxmo5c', image: '/imgix/newsroom-posts/1ruuhm1bsam-Group_887959795__25_.png' },
  { title: 'Presenting at PAC Vegas', date: 'JUNE 29, 2025', slug: 'ae3l7k3tv1ynvw9om1k2', image: '/imgix/newsroom-posts/c9c1bgtgi0s-Mask_group__45_.png' },
  { title: 'Austin event', date: 'MARCH 1, 2025', slug: 'x1ktlmb9nmp4nbnbxl2r', image: '/imgix/newsroom-posts/n4b3fp3ahc-Group_887959795__26_.png' },
  { title: 'Meet our US Director of Athlete Relations', date: 'JANUARY 28, 2025', slug: 'f2lv0oqlz7qxhp0y0pz6', image: '/imgix/newsroom-posts/hosp8fj72cj-Austin__2_.png' },
  { title: 'Meet our new Backend Developer', date: 'JANUARY 5, 2025', slug: 'luwwdsbdi2mboak8g29n', image: '/imgix/newsroom-posts/l0j5lknx6u-Thumbnail_Will__1_.png' },
  { title: 'Introducing Senna', date: 'SEPTEMBER 9, 2024', slug: 'wsnleu7pbmyfw15tmddk', image: '/imgix/newsroom-posts/3jdc21pecu4-Group_887959794__8_.png' },
  { title: 'Sequel launch party', date: 'APRIL 23, 2024', slug: 'u5deto8nuax7w5zjmk02', image: '/imgix/newsroom-posts/d18qebgheh5-Group_887959794__9_.png' },
  { title: 'Meet our new VP of Operations', date: 'JANUARY 6, 2024', slug: 'zf1cahu9e3tf4eabygqg', image: '/imgix/newsroom-posts/au3n89fyh89-92771_undefined__1___4_.jpeg' },
];

export default function PostsPage() {
  return (
    <>
      <Header />
      <PostsAnimations />
      <main>
        <div className="postsScrollSpacer">
          <div id="postsContainer" className="postsContainer">
            <div className="postsSubtitle">Posts</div>
            <div className="postsGrid">
              {POSTS.map((p) => (
                <Link
                  key={p.slug}
                  href={`/stories/${p.slug}`}
                  className="postsPost"
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="postsPostImage"
                    loading="lazy"
                  />
                  <div className="postsPostContent">
                    <h3 className="postsPostTitle">{p.title}</h3>
                    <p className="postsPostDate">{p.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
