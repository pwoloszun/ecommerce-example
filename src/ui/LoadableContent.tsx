import React from 'react';
import { Alert, Spinner } from 'react-bootstrap';

interface ILoadableContentProps<T> {
  loading: boolean;
  value?: T;
  error?: Error;
  render: (value: T) => React.ReactElement;
  loadingPlaceholder?: React.ReactElement;
}

export default function LoadableContent<T>(
  props: ILoadableContentProps<T>
): React.ReactElement {
  const { loading, error, render, value, loadingPlaceholder } = props;
  if (!!error) {
    return (
      <Alert variant="danger">
        Error: {error.message}
      </Alert>
    );
  } else if (loading) {
    return loadingPlaceholder || (
      <Spinner animation="grow" />
    );
  } else if (!!value) {
    return render(value);
  } else {
    throw new Error('LoadableContent error');
  }
}
