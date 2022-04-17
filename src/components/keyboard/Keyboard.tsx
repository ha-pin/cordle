import { FC } from "react"
import "./Keyboard.less"

interface IKBObject {
    [key: string]: string[]
}

const kb: IKBObject = {
    a: ["a", "ا"],
    b: ["b","ب"],
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
    right: string[]
    included: string[]
    except: string[]
    add: (key: string) => void
    backspace: () => void
}

const Keyboard: FC<IKeyboardProps> = ({ type, right, included, except, add, backspace }) => {
    return (
        <ul className="cordle-kb-ul">
            {
                Object.keys(kb).map((key) => [key, kb[key][type]]).map(key =>
                <li key={key[0]} className={except.includes(key[0]) ? "cordle-kb-except" : right.includes(key[0]) ? "cordle-kb-right" : included.includes(key[0]) ? "cordle-kb-included" : right.includes(key[0]) ? "cordle-kb-right" : "cordle-kb-normal"}>
                    <button type="button" disabled={except.includes(key[0])} onClick={() => add(key[0])}>{key[1]}</button>
                </li>)
            }
            <li className="cordle-kb-backspace">
                <button type="button" onClick={() => backspace()}>{'<-'}</button>
            </li>
        </ul>
    )
}

export default Keyboard
