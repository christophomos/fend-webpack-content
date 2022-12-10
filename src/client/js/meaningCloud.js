const detectLanguageInput = document.querySelector('#languageInput')
const detectedtLanguageDiv = document.querySelector('#detectedLanguage')

function handleDetectLanguage (event) {
    event.preventDefault()
    console.log("detect language");
    const text = detectLanguageInput.value;
    postData(text)
        .then( (language) => detectedtLanguageDiv.textContent = text);
};

async function postData(text) {
    let entry = {
        text
    };
    const response = await fetch('/language', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        // Body data type must match "Content-Type" header        
        body: JSON.stringify(entry),
    });

    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log("error", error);
    }
}


export { handleDetectLanguage };
