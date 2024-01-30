chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    title: 'Test this context',
    id: 'contextMenu1',
    contexts: ['page', 'selection'],
  });

  chrome.contextMenus.onClicked.addListener((event) => {
    console.log(event);
  });

  chrome.contextMenus.create({
    title: 'Test this context',
    id: 'contextMenu2',
    parentId: 'contextMenu1',
    contexts: ['page', 'selection'],
  });

  chrome.contextMenus.create({
    title: 'Test this context',
    id: 'contextMenu3',
    parentId: 'contextMenu1',
    contexts: ['page', 'selection'],
  });
});

console.log('background is running');
