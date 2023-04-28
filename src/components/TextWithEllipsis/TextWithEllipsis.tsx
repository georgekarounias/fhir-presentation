import { useState } from 'react';
import { Typography } from 'antd';

const { Text } = Typography;

interface ITextWithEllipsisProps{
    text: string;
}

const TextWithEllipsis = (props: ITextWithEllipsisProps) => {
  const [showFull, setShowFull] = useState(false);

  const handleClick = () => {
    setShowFull(!showFull);
  };

  return (
    <Text
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      {showFull ? props.text : `${props.text.slice(0, 100)}...`}
    </Text>
  );
};

export default TextWithEllipsis;