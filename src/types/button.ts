import { Key, Text} from "./themes";

export interface ButtonProps {
    text: string;
    delButton?: boolean;
    keyStyle: Key;
    textStyle: Text;
    clickEvent?: (event: React.MouseEvent<HTMLButtonElement>) => void
}