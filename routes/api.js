/**
 * creates a new registration
 */
exports.createRegistration = (req, res) => {
  console.log(JSON.stringify(req.body));
  res.status(200).send({'key':'sss', 'value': 'schernoo'});
};

exports.loadRegistration = (req, res) => {
  console.log(JSON.stringify(req.body));
  res.status(200).send({'message': 'ok'});  
}

exports.loadAllRegistrations = (req, res) => {
  console.log(JSON.stringify(req.body));
  res.status(200).send({'message': 'ok'});  
}

exports.storeRegistration = (req, res) => {
  console.log(JSON.stringify(req.body));
  res.status(200).send({'message': 'ok'});  
}

exports.deleteRegistration = (req, res) => {
  console.log(JSON.stringify(req.body));
  res.status(200).send({'message': 'ok'});  
}