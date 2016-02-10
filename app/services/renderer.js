module.exports = (req, res, template, locals) => {

  const mergedLocals = Object.assign({}, locals, {
    logged: req.isAuthenticated()
  });

  res.render(template, mergedLocals);
}