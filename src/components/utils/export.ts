// 答案导出分享
const exportForSharing = (answers: [string, string, number][][]) => {
    const result = answers.map((item) => {
        return item.map(([, , status]) => {
            switch(status) {
                case 0:
                    return '⬜️';
                case 1:
                    return '🟩';
                case 2:
                    return '🟠';
            }
        }).join("")
    })

    return result;
}

export {
    exportForSharing
}
