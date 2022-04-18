import { FC } from "react"
import "./Keyboard.less"

interface IKBObject {
    [key: string]: string[]
}

const kb: IKBObject = {
    a: ["a", "ا"],
    b: ["b", "ب"],
    d: ["d", "د"],
    e: ["e", "ى"],
    f: ["f", "ف"],
    g: ["g", "گ"],
    h: ["h", "ح"],
    i: ["i", "ي"],
    j: ["j", "ج"],
    k: ["k", "ك"],
    l: ["l", "ل"],
    m: ["m", "م"],
    n: ["n", "ن"],
    o: ["o", "و"],
    p: ["p", "پ"],
    q: ["q", "ق"],
    r: ["r", "ر"],
    s: ["s", "س"],
    t: ["t", "ت"],
    u: ["u", "ۇ"],
    v: ["v", "ۆ"],
    w: ["w", "ۋ"],
    z: ["z", "ز"],
    ye: ["ye", "ە"],
    gh: ["gh", "ع"],
    hh: ["hh", "ھ"],
    ng: ["ng", "ڭ"],
    sh: ["sh", "ش"],
    ch: ["ch", "چ"],
    xa: ["xa", "ٴا"],
    xe: ["xe", "ٴى"],
    xo: ["xo", "ٴو"],
    xu: ["xu", "ٴۇ"],
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
                        <li key={k} className={except.has(k) ? "cordle-kb-except" : right.has(k) ? "cordle-kb-right" : included.has(k) ? "cordle-kb-included" : right.has(k) ? "cordle-kb-right" : "cordle-kb-normal"}>
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
