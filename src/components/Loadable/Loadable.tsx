import { FC } from 'react';

import Error from './Error/Error';
import Loader from './Loader/Loader';

import { LoadableProps } from './Loadable.interface';

const Loadable: FC<LoadableProps> = ({ error, loading, children }) => {
  if (loading) return <Loader />;
  if (error) return <Error />;
  return children;
};

export default Loadable;
