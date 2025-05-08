import React, {useState, useEffect} from 'react'
import { SvgContainer, SvgIconProps } from '../SvgIcon';

const DashboardIcon = ({ stroke, strokeWidth }: SvgIconProps) => {
  const [isClient, setClientSide] = useState<boolean | undefined>();
  useEffect(() => {
    setClientSide(true)
  }, [])
  return ( !isClient ? null :
    <SvgContainer stroke={stroke} strokeWidth={strokeWidth}>
      <svg
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M8.25 20.1667V11H13.75V20.1667M2.75 8.25004L11 1.83337L19.25 8.25004V18.3334C19.25 18.8196 19.0568 19.2859 18.713 19.6297C18.3692 19.9736 17.9029 20.1667 17.4167 20.1667H4.58333C4.0971 20.1667 3.63079 19.9736 3.28697 19.6297C2.94315 19.2859 2.75 18.8196 2.75 18.3334V8.25004Z'
          stroke='#8B8B93'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </SvgContainer>
  );
};
export default DashboardIcon;
