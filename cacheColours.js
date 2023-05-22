function saveState() {
    console.log('saveState called')
    const color1 = getComputedStyle(document.documentElement).getPropertyValue(
        "--color-1"
        );
    const color2 = getComputedStyle(document.documentElement).getPropertyValue(
        "--color-2"
        );
    const c1 = localStorage.setItem("--color-1", color2);
    const c2 = localStorage.setItem("--color-2", color1);
    return color2, color1;
    }

function getState() {
    c1 = localStorage.getItem("--color-1");
    c2 = localStorage.getItem("--color-2");
    return [c1, c2]
}

function retrieveState(){
    const stylesheet = document.documentElement.style;
    cols = getState()
    console.log(cols)
    if (cols[0]!=null){
        console.log('c1 is not None')
        c1 = cols[0]
        c2 = cols[1]
        stylesheet.setProperty("--color-1", c1);
        stylesheet.setProperty("--color-2", c2);
        if (c2 == '#e5fdff'){
            console.log('clearing local storage')
            clearCache();
        }
    }
    else {
        console.log('no data')
    };
    }

function clearCache() {
    localStorage.clear();
}

