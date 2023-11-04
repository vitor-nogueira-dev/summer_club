const fields = ['name', 'age', 'matricula', 'email', 'frequent'];

const checkRequiredFields = (req, res, next) => {
  const missingFields = fields.filter((field) => !(field in req.body));

  if (missingFields.length > 0) {
    return res.status(422).json({
      messsage: 'Missing fields required',
      missingFields,
    });
  }
  return next();
};

module.exports = checkRequiredFields;
