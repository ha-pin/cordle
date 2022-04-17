const Introduce = () => {
    return <div className="h-full fixed z-50">
        <div>
            <p>哈兜</p>
            <p>哈萨克语版 Wordle</p>
        </div>

        <div>
            <p>游戏规则</p>
            <p>随着单词的长度你有不同次数的尝试机会猜一个 <b>哈语单词</b>。</p>
            <p>每次猜测后，格子中的颜色将会标识其与正确答案的区别。</p>
        </div>

        {/* 示例1 */}
        {/* 示例2 */}

        {/* 开始游戏 */}

        {/* 配置项菜单 */}
        <p>
            inspired by <a href="https://www.wordle.net/">Wordle</a>, <a href="https://handle.antfu.me" title="Handle">汉兜</a>, made by <a href="https://goer.icu" title="Herbert He">Herbert He</a>
        </p>
    </div>
}

export default Introduce
