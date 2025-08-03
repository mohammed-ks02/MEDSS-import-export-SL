import React from 'react';
import { useLanguage } from '../utils/i18n.tsx';

interface TranslatableTextProps {
  translationKey: string;
  fallback?: string;
  className?: string;
  tag?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div';
}

const TranslatableText: React.FC<TranslatableTextProps> = ({ 
  translationKey, 
  fallback = '', 
  className = '',
  tag: Tag = 'span'
}) => {
  const { t } = useLanguage();
  
  const translatedText = t(translationKey, fallback);
  
  return <Tag className={className}>{translatedText}</Tag>;
};

export default TranslatableText;
