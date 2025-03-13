import AcknowledgementsContent from '@/components/Doc/NewStuff/gettingStarted/Acknowledgements';
import IntroductionContent from '@/components/Doc/NewStuff/gettingStarted/Introduction';
import SuggestedCitationContent from '@/components/Doc/NewStuff/gettingStarted/SuggestedCitation';

export default function GettingStarted() {
  return (
    <>
      <IntroductionContent />
      <AcknowledgementsContent />
      <SuggestedCitationContent />
    </>
  );
}
