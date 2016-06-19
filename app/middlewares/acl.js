module.exports = (req, res, next) => {
  if (req.path == '/login'
    || req.path == '/login/register'
    || req.path == '/'
    || req.path == '/api/article'
    || req.isAuthenticated()) {
    //|| true) { // @TODO - remove
    next();
  } else {
    res.redirect('/login');
  }
}