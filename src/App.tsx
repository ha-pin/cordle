import { useState } from 'react'
import './App.less'

import Keyboard from './components/keyboard/Keyboard'

const App = () => {
    const [type, setType] = useState<0 | 1 | 2>(1)
    const [included, setIncluded] = useState<string[]>(["a"])
    const [right, setRight] = useState<string[]>(["b"])
    const [except, setExcept] = useState<string[]>(["e"])

    const [answers, setAnswers] = useState<string[][]>([])
    const [attempt, setAttempt] = useState<number>(0)

    const backspace = () => {

    }

    const add = () => { }

    return (
        <div className="w-sm <md:(w-full)">
            <div>
                <p>哈兜</p>
                <p>哈萨克语版 Wordle</p>
            </div>
            <Keyboard type={type} included={included} right={right} except={except} add={add} backspace={backspace} />
        </div>
    )
}

export default App
