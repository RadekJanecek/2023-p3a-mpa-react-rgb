import React, {useReducer} from "react";

type colorType = { R: number, G: number, B: number };
export enum colorChannel {
    R = "R",
    G = "G",
    B = "B",
}

type stateType = { 
    color: colorType
    //changeColor: (color: colorType) => void
};

type ColorAction = 
    {type: "CHANGE_COLOR"; value: number; part: colorChannel} |
    {type: "REPLACE_COLOR"; value: colorType} |
    {type: "RESET_COLOR"; part: colorChannel}
    ;

const colorsReducer = (state: stateType, action: ColorAction) => {
    const newState = {...state};
    switch(action.type) {
        case "RESET_COLOR":
            return {color: {R: 0, G: 0, B: 0}};
        /*case "CHANGE_COLOR":
            switch (action.part) {
                case colorChannel.R:
                    newState.color.R = action.value;
                    return newState; 
            }
            break;*/
        case "CHANGE_COLOR":
            newState.color[action.part] = action.value;
            return newState;
        default:
            return state;
    }
}

const initialState: stateType = { 
    color: {R: 0, G: 0, B: 0 }, 
    //changeColor: (color: colorType) => { console.log(color)} 
};


export const ColorSlidersContext = React.createContext<[stateType, React.Dispatch<ColorAction>]>([initialState, () => {}]);

/*
interface IColorSliderProvider {
    children: React.ReactNode;
}*/

export const ColorSliderContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    /*const [color, setColor] = React.useState<colorType>({R: 0, G: 0, B: 0 });*/
    const reduce = useReducer(colorsReducer, initialState);
    // reduce = [state, dispatch]

/*
    const changeColor = (color: colorType) => {
        //setColor(color);
        dispatch({type: "REPLACE_COLOR", value: color})
    };
*/
    return (
        <ColorSlidersContext.Provider value={reduce}>
            {children}
        </ColorSlidersContext.Provider>
    );
}

export default ColorSliderContextProvider;
