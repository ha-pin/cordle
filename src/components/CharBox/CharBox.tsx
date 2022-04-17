import { FC } from "react"
import "./CharBox.less"

interface ICharBoxProps {
    chars: Array<[string, number]>
}

const CharBox: FC<ICharBoxProps> = ({ chars }) => {
    const isArabic = (c: string) => {
        // 判断 RTL 渲染
        return true
    }

    return <ul className="cordle-cb">
        {/* 老文字 RTL */}
        {isArabic(chars[0][0]) && chars.map(([char, status], idx) => <li key={`${char}-${idx}`} className={status === 0 ? "cordle-cb-except" : status === 1 ? "cordle-cb-right" : status === 2 ? "cordle-cb-included" : "cordle-cb-pending"}>
            <span>{char}</span>
        </li>)}
    </ul>
}

export default CharBox
