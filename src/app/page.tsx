import PageFrame from '@/components/PageFrame';
import VideoHero from '@/components/VideoHero';
import PreviousConferencesGallery from '@/components/PreviousConferencesGallery';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <PageFrame homePage showFooter={true} showBottomInfoAtBase={false}>
      <VideoHero />
      <PreviousConferencesGallery />
    </PageFrame>
  );
}
