import React from 'react';

interface EntityCardProps {
  title: string;
  fields: Array<{
    label: string;
    value: string | number;
  }>;
  className?: string;
}

const EntityCard: React.FC<EntityCardProps> = ({
  title,
  fields,
  className = ''
}) => {
  return (
    <div className={`bg-gray-50 rounded-lg p-4 ${className}`}>
      <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
      <div className="space-y-1 text-sm text-gray-600">
        {fields.map((field, index) => (
          <p key={index}>
            {field.label}: {field.value}
          </p>
        ))}
      </div>
    </div>
  );
};

export default EntityCard; 