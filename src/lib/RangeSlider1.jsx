import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const RangeSlider = ({ min = 0, max = 2000, defaultValue = [0, 60], onChange = () => {} }) => {
    const [value, setValue] = useState(defaultValue);

    const handleSliderChange = (newValue) => {
        setValue(newValue);
        onChange(newValue);
    };

    return (
        
        <div className="range-slider">
            
            <Slider
                range
                min={min}
                max={max}
                value={value}
                onChange={handleSliderChange}
                defaultValue={defaultValue}
            />
           
        </div>
    );
};

export default RangeSlider;

