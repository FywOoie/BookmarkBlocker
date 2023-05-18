chrome.runtime.onStartup.addListener(function() {
    const bookmarksToRemove = ["百度一下，你就知道"];
    chrome.bookmarks.search({}, function(result) {
      result.forEach(function(bookmark) {
        if (bookmarksToRemove.includes(bookmark.title)) {
          chrome.bookmarks.remove(bookmark.id);
        }
      });
    });
  });