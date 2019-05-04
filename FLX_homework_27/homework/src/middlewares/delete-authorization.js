function isRegistered(req, res, next) {
  let registered = req.header('Registered');
  if (registered == 'X-Password qwerty') {
    return next();
  } else {
    res.status(400).send('You are not registered');
    res.redirect('/car');
  }
}
module.exports = isRegistered;