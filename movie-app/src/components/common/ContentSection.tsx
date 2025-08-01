import React from 'react';

interface ContentSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  children,
  className = ''
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-sm p-6 mb-8 ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      {children}
    </div>
  );
};

export default ContentSection; 