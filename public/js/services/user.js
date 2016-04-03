module.exports = {
  getUserId: () => {
    return document.querySelector('body').dataset.userId
  }
}