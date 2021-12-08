function move(element, distance=80, duration='0.1s', timing='linear') {
    // ensure element to move has an id
    let elementId = element.id;
    if (!elementId) { 
        throw('Cannot move element without an id.');
    }

    // find or create stylesheet for element
    let elementStyleSheet = document.getElementById(`${elementId}-movement`);
    if (!elementStyleSheet) {
        elementStyleSheet = document.createElement('style');
        elementStyleSheet.id = `${elementId}-movement`;
        document.head.appendChild(elementStyleSheet);
    }
    console.log('current');
    console.log(elementStyleSheet);

    // Get current top value
    let elementStyle = window.getComputedStyle(element);
    let topValue = elementStyle.getPropertyValue('top').replace('px', '');
    console.log(`topValue ${topValue}`);

    // Determine destination of top value
    let destination = `${(Number(topValue) + distance)}px`;
    console.log(`destination ${destination}`);

    // Remove old class
    //elementStyleSheet.innerHTML = elementStyleSheet.innerHTML.replace(/\s+#(.|\n)*?\}\s+\n/, "");

    // Add a new class to the stylesheet
    elementStyleSheet.innerHTML += `
        # ${elementId}.moved
        {
            transition: all ${duration} ${timing};
            -webkit-transition: all ${duration} ${timing};
            -moz-transition: all ${duration} ${timing};
            -o-transition: all ${duration} ${timing};
            top: ${destination};
            left: ${elementStyle.getPropertyValue('left')};
        }
    `;
    
    console.log('new');
    console.log(elementStyleSheet);
    // Add the class to fire the CSS transition
    element.classList.add('moved');
}

let littleBox = document.getElementById('little-box');
littleBox.onclick = function () { 
    move(this); };