import React from 'react';
import { Card, CardImgProps } from 'react-bootstrap';

import useHolder from 'src/infrastructure/hooks/useHolder';

type IMyImageProps = any;

export default function MyImage(props: IMyImageProps): React.ReactElement {
  useHolder();

  return (
    <Card.Img {...props} />
  );
}

