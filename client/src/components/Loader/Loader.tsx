import { InfinitySpin } from 'react-loader-spinner';
import './Loader.scss';

export const Loader = () => (
  <div className='Loader'>
    <InfinitySpin width="200" color="#615dbb" />
  </div>
);
