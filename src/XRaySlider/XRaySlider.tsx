import React, { FC, HTMLAttributes } from 'react';

export interface IXRaySlider extends HTMLAttributes<HTMLInputElement> {
  sliderPosition: number;
  setSliderPosition: React.Dispatch<React.SetStateAction<number>>;
  width?: number | string;
}

const XRaySlider: FC<IXRaySlider> = ({
  width = 200,
  sliderPosition,
  setSliderPosition,
  ...props
}) => {
  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.currentTarget.value));
  }

  return (<input
    {...props}
    type='range'
    value={sliderPosition}
    min='0'
    max='100'
    style={{width: Number.isInteger(width) ? `${width}px` : width}}
    onInput={handleInput}
  />);
};

export default XRaySlider;