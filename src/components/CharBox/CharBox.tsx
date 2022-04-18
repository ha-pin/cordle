import { FC } from "react"
import "./CharBox.less"

interface ICharBoxProps {
    chars: Array<[string, string, number]>
    type: 0 | 1 | 2
}

const CharBox: FC<ICharBoxProps> = ({ chars, type }) => {

    return <ul className={`cordle-cb ${type === 1 ? "cordle-cb-reverse" : ""}`}>
        {chars[0][1] && chars.map(([key, char, status], idx) => <li key={`${char}-${idx}`} className={status === 0 ? "cordle-cb-except" : status === 1 ? "cordle-cb-right" : status === 2 ? "cordle-cb-included" : "cordle-cb-pending"}>
            <span>{char}</span>
        </li>)}
    </ul>
}

export default CharBox
