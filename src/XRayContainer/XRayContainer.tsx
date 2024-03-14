import React, { FC, HTMLAttributes, useEffect, useRef } from 'react';
import './XRayContainer.css';

export interface IXRayContainer extends HTMLAttributes<HTMLDivElement> {
  sliderPosition: number;
  backgroundImage: string;
  width?: number | string
  xrayImage: string;
  frameWidth?: number | string;
  frameColor?: string;
  frameBorderWidth?: number;
  backdrop?: number
}

const XRayContainer: FC<IXRayContainer> = ({
  sliderPosition,
  backgroundImage,
  width = 800,
  xrayImage,
  frameWidth = 200,
  frameColor = '#d7b4f1',
  frameBorderWidth = 1,
  backdrop = 0,
  ...props
}) => {
  const xRayContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const containerWidth = Number(xRayContainer.current?.offsetWidth);
    const xrayFrame = xRayContainer.current?.querySelector('.xray-frame') as HTMLDivElement;
    const xrayImage = xRayContainer.current?.querySelector('.xray-image') as HTMLDivElement;
    const xrayPosition = sliderPosition / 100 * (containerWidth - xrayFrame?.offsetWidth);

    xrayImage?.setAttribute('style', `
      width: ${Number.isInteger(frameWidth) ? `${frameWidth}px` : frameWidth};
      object-position: -${xrayPosition}px 0px;
      transform: translateX(${xrayPosition}px);
    `);

    xrayFrame?.setAttribute('style', `
      transform: translateX(${xrayPosition}px);
      width: ${Number.isInteger(frameWidth) ? `${frameWidth}px` : frameWidth};
      border-color: ${frameColor};
      border-width: ${frameBorderWidth}px;
    `);
  }, [sliderPosition]);

  return (<div
    {...props}
    ref={xRayContainer}
    className={`xray-container ${props.className ?? ''}`}
    style={{...props.style, width: Number.isInteger(width) ? `${width}px` : width}}
  >
    {backdrop > 0 && <div className='xray-backdrop' style={{opacity: backdrop}} />}
    <img className='background-image' src={backgroundImage} />
    <img className='xray-image' src={xrayImage} />
    <div className='xray-frame' />
  </div>);
};

export default XRayContainer;