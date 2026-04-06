import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MembershipSection1 } from '@/components/membership/MembershipSection1';
import { MembershipSection2 } from '@/components/membership/MembershipSection2';
import { MembershipSection3 } from '@/components/membership/MembershipSection3';
import { MembershipSection4 } from '@/components/membership/MembershipSection4';
import { MembershipSection5 } from '@/components/membership/MembershipSection5';
import { MembershipAnimations } from '@/components/membership/MembershipAnimations';

export const metadata: Metadata = {
  title: 'Membership',
};

export default function MembershipPage() {
  return (
    <>
      <Header />
      <MembershipAnimations />
      <main id="main-content">
        <div id="scrollSpacer">
          <MembershipSection1 />
          <MembershipSection2 />
          <MembershipSection3 />
          <MembershipSection4 />
          <MembershipSection5 />
        </div>
      </main>
      <Footer />
    </>
  );
}
