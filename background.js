chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    title: 'Test this context',
    id: 'contextMenu1',
    contexts: ['page', 'selection'],
  });

  chrome.contextMenus.onClicked.addListener((event) => {
    console.log(event);
    chrome.tabs.create({
      active: true,
      url: 'https://www.google.com',
    });
  });
});

console.log('background is running');
