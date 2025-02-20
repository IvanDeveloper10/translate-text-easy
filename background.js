chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: 'translateText',
        title: 'Traducir texto',
        contexts: ['selection']
    });
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
    if (info.menuItemId === 'translateText') {
        const text = info.selectionText;
        const translatedText = await translateText(text);
        chrome.notifications.create({
            type: 'basic',
            iconUrl: 'icon.png',
            title: 'Traducción',
            message: translatedText
        });
    }
});

async function translateText(text) {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=es&dt=t&q=${encodeURIComponent(text)}`;
    const response = await fetch(url);
    const data = await response.json();
    return data[0][0][0];
}
