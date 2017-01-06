module.exports = (req, res, template, locals) => {
  const userId = req.user && req.user._id ? req.user._id : null

  const mergedLocals = Object.assign({}, locals, {
    logged: req.isAuthenticated(),
    userId,
  });

  res.render(template, mergedLocals);
}
