module.exports = (req, res, next) => {
  if (req.path === '/login'
    || req.path === '/login/register'
    || req.path === '/'
    || req.path === '/api/article'
    || req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/login');
  }
};
