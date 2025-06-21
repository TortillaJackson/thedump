
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const BlogHeader = () => {
  const { t } = useLanguage();
  
  return (
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-6xl font-light text-gray-900 mb-6">
        {t('blog.title')}
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        {t('blog.subtitle')}
      </p>
    </div>
  );
};

export default BlogHeader;
