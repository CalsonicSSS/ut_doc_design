import AcknowledgementsContent from '@/components/Doc/gettingStarted/Acknowledgements';
import IntroductionContent from '@/components/Doc/gettingStarted/Introduction';
import SuggestedCitationContent from '@/components/Doc/gettingStarted/SuggestedCitation';

export default function GettingStarted() {
  return (
    <>
      <IntroductionContent />
      <AcknowledgementsContent />
      <SuggestedCitationContent />
    </>
  );
}
