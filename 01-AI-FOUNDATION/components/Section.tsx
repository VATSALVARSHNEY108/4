import React from 'react';

interface SectionProps {
  number: number;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ number, title, children }) => {
  return (
    <section className="my-12">
      <div className="section-header">
        <div className="section-number text-text-tertiary mb-1">
          {`0${number}.`}
        </div>
        <h2 className="text-2xl font-bold" style={{ fontFamily: "'Fraunces', serif" }}>
          {title}
        </h2>
        <hr className="border-t border-border my-4" />
      </div>
      <div className="section-content">
        {children}
      </div>
    </section>
  );
};

export default Section;
