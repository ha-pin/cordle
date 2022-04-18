import { FC } from "react"
import "./Keyboard.less"

interface IKBObject {
    [key: string]: string[]
}

const kb: IKBObject = {
    a: ["a", "ا", "а"],
    b: ["b", "ب", "б"],
    d: ["d", "د", "д"],
    e: ["e", "ى", "ы"],
    f: ["f", "ف", "ф"],
    g: ["g", "گ", "г"],
    h: ["h", "ح", "х"],
    i: ["i", "ي", "й"],
    j: ["j", "ج", "ж"],
    k: ["k", "ك", "к"],
    l: ["l", "ل", "л"],
    m: ["m", "م", "м"],
    n: ["n", "ن", "н"],
    o: ["o", "و", "о"],
    p: ["p", "پ", "п"],
    q: ["q", "ق", "қ"],
    r: ["r", "ر", "р"],
    s: ["s", "س", "с"],
    t: ["t", "ت", "т"],
    u: ["u", "ۇ", "ұ"],
    v: ["v", "ۆ", "в"],
    w: ["w", "ۋ", "у"],
    z: ["z", "ز", "з"],
    ye: ["ye", "ە", "е"],
    gh: ["gh", "ع", "ғ"],
    hh: ["hh", "ھ", "һ"],
    ng: ["ng", "ڭ", "ң"],
    sh: ["sh", "ش", "ш"],
    ch: ["ch", "چ", "ч"],
    xa: ["xa", "ٴا", "ә"],
    xe: ["xe", "ٴى", "і"],
    xo: ["xo", "ٴو", "ө"],
    xu: ["xu", "ٴۇ", "ү"],
}

interface IKeyboardProps {
    type: 0 | 1 | 2
    right: Set<string>
    included: Set<string>
    except: Set<string>
    add: (key: string, char: string) => void
    backspace: () => void
    submit: () => void
    hidden: boolean
}

const Keyboard: FC<IKeyboardProps> = ({ type, right, included, except, add, backspace, submit, hidden }) => {
    return (
        <div className="overflow-hidden fixed bottom-0 w-full flex flex-row justify-center items-center"
            style={hidden ? { display: "none" } : {}}>
            <ul className="cordle-kb-ul">
                {
                    Object.keys(kb).map((key) => [key, kb[key][type]]).map(([k, c]) =>
                        <li key={k} className={except.has(k) ? "cordle-kb-except" : included.has(k) ? "cordle-kb-included" : right.has(k) ? "cordle-kb-right" : "cordle-kb-normal"}>
                            <button type="button" disabled={except.has(k)} onClick={() => add(k, c)}>{c}</button>
                        </li>)
                }
                <li className="cordle-kb-backspace">
                    <button type="button" onClick={() => backspace()}>←</button>
                </li>
                <li className="cordle-kb-submit">
                    <button type="button" onClick={() => submit()}>提交</button>
                </li>
            </ul>
        </div>
    )
}

export default Keyboard
