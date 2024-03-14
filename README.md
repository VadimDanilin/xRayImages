# xRayImages

xRayImages is a solution if you need to implement a moving image on top of another using a slider.

## Screenshot

![App Screenshot](https://github.com/VadimDanilin/xRayImages/assets/122484588/9fe628c3-cc31-4b7a-af8b-5db82a18aa3f)

## Installation
- Using npm
```bash
  npm i xrayimages
```

- Using yarn
```bash
  yarn add xrayimages
```

## Example usage

```React.js
import { useState } from 'react';
import { XRayContainer, XRaySlider} from 'xrayimages'
import backgroundImage from './assets/backgroundImage.jpg'
import xrayImage from './assets/xrayImage.jpg'

function App() {
  const [sliderPosition, setSliderPosition] = useState(0)

  return (
    <>
      <XRayContainer
        sliderPosition={sliderPosition}
        backgroundImage={backgroundImage}
        xrayImage={xrayImage}
      />
      <XRaySlider
        sliderPosition={sliderPosition}
        setSliderPosition={setSliderPosition}
      />
    </>
  )
}
```

### XRayContainer props

| Prop | Type | Description | Example |
|------|------|-------------|---------|
| sliderPosition | number | Slider position |
| backgroundImage | string | Full background image |
| xrayImage | string | xRay image |
| width?=800 | number \| string | Container width | width={1200} or width='50%' |
| frameWidth?=200 | number \| string | Frame xRay width | width={200} or width='300px' |
| frameColor?='#d7b4f1' | string | Frame border color |
| frameBorderWidth?=1 | number | Frame border width |
| backdrop?=0 | number | Darkening the full background | backdrop={0.4} |
| ...props | | Residual props such as className, style and others |

### XRaySlider props

| Prop | Type | Description | Example |
|------|------|-------------|---------|
| width?=200 | number | Slider width | width={200} or width='50%' |
| sliderPosition | number | Slider position |
| setSliderPosition | React.Dispatch<React.SetStateAction<number>> | Setting the slider position state |
| ...props | | Residual props such as className, style and others |