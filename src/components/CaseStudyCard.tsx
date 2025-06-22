
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { CaseStudy } from "@/data/caseStudiesData";

interface CaseStudyCardProps {
  study: CaseStudy;
  index: number;
  cardRef: (el: HTMLDivElement | null) => void;
  onCaseStudyClick: (study: CaseStudy) => void;
}

export const CaseStudyCard = ({ study, index, cardRef, onCaseStudyClick }: CaseStudyCardProps) => {
  return (
    <Card 
      key={study.id}
      ref={cardRef}
      className={`shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden case-study-card opacity-0 ${
        index % 2 === 0 ? 'translate-x-[-100px]' : 'translate-x-[100px]'
      } ${study.websiteUrl ? 'cursor-pointer' : ''}`}
      style={{
        transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }}
      onClick={() => onCaseStudyClick(study)}
    >
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${
        index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
      }`}>
        {/* Content */}
        <div className={`p-8 lg:p-12 flex flex-col justify-center ${
          index % 2 === 1 ? 'lg:col-start-2' : ''
        }`}>
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Badge variant="secondary" className="bg-[#f0511e]/10 text-[#f0511e] border-[#f0511e]/20">
                {study.category}
              </Badge>
            </div>
            
            <CardHeader className="p-0">
              <CardTitle className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
                {study.name}
              </CardTitle>
              <CardDescription className="text-lg text-gray-600 leading-relaxed">
                {study.description}
              </CardDescription>
            </CardHeader>
            
            <div className="bg-[#f0511e]/10 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Impact</h4>
              <p className="text-gray-600">{study.impact}</p>
            </div>
            
            {study.links && study.links.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {study.links.map((link, linkIndex) => (
                  <Button
                    key={linkIndex}
                    variant="outline"
                    size="sm"
                    className="border-[#f0511e] text-[#f0511e] hover:bg-[#f0511e] hover:text-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(link.url, '_blank');
                    }}
                  >
                    {link.title}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* Image */}
        <div className={`relative overflow-hidden bg-[#f0511e] ${
          index % 2 === 1 ? 'lg:col-start-1' : ''
        }`}>
          <div className="aspect-square lg:aspect-auto lg:h-full flex items-center justify-center p-8">
            <img 
              src={study.image} 
              alt={study.name}
              className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300 drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </Card>
  );
};
