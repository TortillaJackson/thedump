
import { Navigation } from "@/components/Navigation";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { CallToAction } from "@/components/CallToAction";
import { caseStudies, CaseStudy } from "@/data/caseStudiesData";
import { useCaseStudyAnimation } from "@/hooks/useCaseStudyAnimation";

const CaseStudies = () => {
  const { setCardRef } = useCaseStudyAnimation();

  const handleCaseStudyClick = (study: CaseStudy) => {
    if (study.websiteUrl) {
      window.open(study.websiteUrl, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-light text-gray-900 mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Erfolgreiche Ventures, die wir von der Idee bis zur Marktreife begleitet haben
            </p>
          </div>

          {/* Case Studies */}
          <div className="max-w-7xl mx-auto space-y-16">
            {caseStudies.map((study, index) => (
              <CaseStudyCard
                key={study.id}
                study={study}
                index={index}
                cardRef={setCardRef(index)}
                onCaseStudyClick={handleCaseStudyClick}
              />
            ))}
          </div>

          <CallToAction />
        </div>
      </main>
    </div>
  );
};

export default CaseStudies;
