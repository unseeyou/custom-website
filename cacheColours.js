function saveState() {
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
    if (cols[0]!=null){
        c1 = cols[0]
        c2 = cols[1]
        stylesheet.setProperty("--color-1", c1);
        stylesheet.setProperty("--color-2", c2);
        console.log(c2)
        if (c2 == '#e0fdff') {
            //clear the local storage since light mode is default so there is no need to save it
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

