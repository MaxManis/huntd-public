import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { FCIcon } from '@/ui/icons/icons.typedefs';
import { Colors } from '@/ui/theme/colors';

export const AppleIcon: FCIcon = (props) => {
  const { color = Colors.CurrentColor, ...rest } = props;

  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...rest}
    >
      <Path
        d="M20.49 16.5861C20.1986 17.2653 19.8386 17.913 19.4156 18.5191C18.8506 19.3262 18.3865 19.8839 18.0309 20.1943C17.4784 20.7015 16.8849 20.9625 16.2504 20.9772C15.7959 20.9772 15.2466 20.8478 14.6068 20.5847C13.9649 20.3227 13.3757 20.1943 12.8358 20.1943C12.2708 20.1943 11.6647 20.3227 11.0154 20.5847C10.3672 20.8478 9.84321 20.9856 9.4423 20.9982C8.83514 21.0245 8.22799 20.7573 7.62294 20.1943C7.23676 19.8576 6.75377 19.2788 6.17397 18.4602C5.55314 17.5879 5.04279 16.5724 4.64293 15.4181C4.21466 14.1691 4 12.9611 4 11.7909C4 10.4514 4.28937 9.29498 4.86917 8.3269C5.3077 7.5666 5.93463 6.93206 6.68958 6.48439C7.43402 6.03788 8.28385 5.79746 9.15187 5.78779C9.63591 5.78779 10.2704 5.93721 11.0565 6.23185C11.8425 6.52648 12.3476 6.6759 12.5675 6.6759C12.7338 6.6759 13.2925 6.50017 14.2438 6.15187C15.1413 5.82883 15.899 5.69519 16.5198 5.74781C18.2034 5.88355 19.4672 6.54647 20.308 7.74184C18.8032 8.65415 18.0593 9.93055 18.074 11.5689C18.0866 12.8453 18.5507 13.907 19.4598 14.7499C19.8618 15.1345 20.3307 15.4423 20.8436 15.658C20.732 15.9811 20.6142 16.2894 20.49 16.5861ZM16.6313 1.40091C16.6313 2.40056 16.2652 3.33497 15.538 4.19888C14.6584 5.22588 13.5956 5.82041 12.4433 5.72676C12.4283 5.60106 12.4209 5.47455 12.4212 5.34795C12.4212 4.38723 12.8379 3.36022 13.5819 2.51947C13.9523 2.09435 14.4237 1.73974 14.9951 1.45773C15.5654 1.17994 16.1042 1.02631 16.6114 1C16.625 1.13469 16.6313 1.26833 16.6313 1.40091Z"
        fill={color}
      />
    </Svg>
  );
};