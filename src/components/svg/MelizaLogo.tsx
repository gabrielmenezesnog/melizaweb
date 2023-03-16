import React from 'react';

interface Props {
  width?: number;
  height?: number;
  fill?: string;
}

class MelizaLogo extends React.Component<Props> {
  static defaultProps = {
    width: 100,
    height: 100,
    fill: '#000000',
  };

  render() {
    // const { width, height, fill } = this.props;
    return (
      <svg
        width="38"
        height="21"
        viewBox="0 0 38 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.7143 1L23.8571 19L36 1H26.2857L14.1429 19C14.1429 19 6.74208 8.02944 2 1H11.7143Z"
          stroke="#1E90FF"
          strokeWidth="2"
        />
      </svg>
    );
  }
}

export default MelizaLogo;
