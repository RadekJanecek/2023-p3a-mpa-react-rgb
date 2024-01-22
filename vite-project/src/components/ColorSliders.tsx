import React from 'react';
import StyledSlider from './StyledSlider';
import  {ColorSlidersContext, colorChannel}  from '../providers/ColorSliderContextProvicer';
import { useContext } from 'react';
import styles  from "./ColorSliders.module.css";

/*
interface useContextType {
    color: { R: number, G: number, B: number };
    changeColor: (color: { R: number, G: number, B: number }) => void;
}*/

export const ColorSliders:React.FC = () => {
    const [state, dispatch] = useContext(ColorSlidersContext);

    return (
      <div className={styles["container"]}>
            <StyledSlider
            min={0}
            max={255}
            value={state.color.R}
            onChange={(e) => /*changeColor({R: parseInt(e.currentTarget.value), G: color.G, B: color.B})*/
                dispatch({type: "CHANGE_COLOR", value: parseInt(e.currentTarget.value), part: colorChannel.R})
            }
            backgroundColor={
                `rgb(${state.color.R}, ${state.color.G}, ${state.color.B})`
            }
            thumbColor={
                `rgb(${state.color.R}, 0, 0)`
            }
            />
      </div>
    );
    
  }
  export default ColorSliders;