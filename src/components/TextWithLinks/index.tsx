import { FC } from 'react';
import { wrapLinksInText } from '../../utils/helpers';

export const TextWithLinks: FC<{ text: string }> = ({ text }) => {
  const wrappedText = wrapLinksInText(text);
  return <span dangerouslySetInnerHTML={{ __html: wrappedText }} />;
};
