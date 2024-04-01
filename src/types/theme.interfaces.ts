import { FlattenSimpleInterpolation } from 'styled-components';

export interface ThemeWrapper {
    form: FlattenSimpleInterpolation;
    container: FlattenSimpleInterpolation;
    'flex-column': FlattenSimpleInterpolation;
    btnContainer: FlattenSimpleInterpolation;
}

export interface ThemeButton {
    dark: FlattenSimpleInterpolation;
    circle: FlattenSimpleInterpolation;
}

export interface ThemeIcon {
    fill: FlattenSimpleInterpolation;
}

export interface Theme {
    wrapper: ThemeWrapper;
    button: ThemeButton;
    icon: ThemeIcon;
}
