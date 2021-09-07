function getAllElementsWithAttribute(attribute) {
    const matchingElements = [];
    const allElements = document.getElementsByTagName('*');
    for (var i = 0, n = allElements.length; i < n; i++) {
        if (allElements[i].getAttribute(attribute) !== null) {
            matchingElements.push(allElements[i]);
        }
    }
    return matchingElements;
}

getAllElementsWithAttribute('data-ayaka-lift').forEach((element) => {
    element.classList.add('ayaka-lift')
    let rect = null;
    
    // 模拟 :active 状态
    element.addEventListener('mousedown', ({ target }) => {
        target.style.setProperty("--scale", 1);
    })
    // 模拟 :active 状态（鼠标抬起时恢复）
    element.addEventListener('mouseup', ({ target }) => {
        target.style.setProperty("--scale", 1.05);
    })

    // 模拟 :hover 状态
    element.addEventListener("mouseenter", ({ target }) => {
        rect = target.getBoundingClientRect();
        target.style.setProperty("--scale", 1.05);
    }, { passive: true })
    // 跟随鼠标移动
    element.addEventListener("mousemove", ({ target, clientX, clientY }) => {
        const halfHeight = rect.height / 2;
        const topOffset = (clientY - rect.top - halfHeight) / halfHeight;
        const halfWidth = rect.width / 2;
        const leftOffset = (clientX - rect.left - halfWidth) / halfWidth;
        target.style.setProperty("--translateX", `${leftOffset * 6}px`);
        target.style.setProperty("--translateY", `${topOffset * 4}px`);
    }, { passive: true })
    // 模拟 :hover 状态（鼠标移出时恢复）
    element.addEventListener("mouseleave", ({ target }) => {
        isCursorLocked = false;
        target.style.setProperty("--translateX", 0);
        target.style.setProperty("--translateY", 0);
        target.style.setProperty("--scale", 1);
    }, { passive: true })
});
