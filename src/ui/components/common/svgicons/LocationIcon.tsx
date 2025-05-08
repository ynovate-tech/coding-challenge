import React, {useState, useEffect} from 'react'
import { SvgContainer, SvgIconProps } from '../SvgIcon';

const LocationIcon = ({ stroke, strokeWidth }: SvgIconProps) => {
  const [isClient, setClientSide] = useState<boolean | undefined>();
  useEffect(() => {
    setClientSide(true)
  }, [])
  return ( !isClient ? null :
    <SvgContainer stroke={stroke} strokeWidth={strokeWidth}>
      <svg
        width='26'
        height='30'
        viewBox='0 0 26 30'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M24.25 12.5C24.25 21.25 13 28.75 13 28.75C13 28.75 1.75 21.25 1.75 12.5C1.75 9.51631 2.93526 6.65483 5.04505 4.54505C7.15483 2.43526 10.0163 1.25 13 1.25C15.9837 1.25 18.8452 2.43526 20.955 4.54505C23.0647 6.65483 24.25 9.51631 24.25 12.5Z'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M13 16.25C15.0711 16.25 16.75 14.5711 16.75 12.5C16.75 10.4289 15.0711 8.75 13 8.75C10.9289 8.75 9.25 10.4289 9.25 12.5C9.25 14.5711 10.9289 16.25 13 16.25Z'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </SvgContainer>
  );
};
export default LocationIcon;
