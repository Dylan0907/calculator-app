export interface Themes {
    one: Theme;
    two:Theme;
    three: Theme
    
}

export interface Theme {
    background: Background;
    key: Key;
    text: Text
}

interface Background {
    main: string;
    togglekeypad: string;
    screen: string
}

export interface Key {
    specialKeyBg: string;
    specialKeyShw: string;
    toggleEqBtn: string;
    toggleEqBtnShw: string;
    numberKeyBg: string;
    numberKeyShw: string
}

export interface Text {
    text1: string;
    text2: string;
    text3?: string
}