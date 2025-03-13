import AcknowledgementsContent from '@/components/Doc/NewStuff/GettingStarted/Acknowledgements';
import IntroductionContent from '@/components/Doc/NewStuff/GettingStarted/Introduction';
import SuggestedCitationContent from '@/components/Doc/NewStuff/GettingStarted/SuggestedCitation';

export default function GettingStarted() {
  return (
    <>
      <IntroductionContent />
      <AcknowledgementsContent />
      <SuggestedCitationContent />
    </>
  );
}
