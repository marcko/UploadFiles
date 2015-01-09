/**
 * FileController
 *
 * @description :: Server-side logic for managing files
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	upload: function (req, res) {

	 res.setTimeout(0);

    req.file('avatar')
    .upload({

      // You can apply a file upload limit (in bytes)
      maxBytes: 1000000,
      
    }, function whenDone(err, uploadedFiles) {
      if (err) return res.serverError(err); 
      return res.json({
      	files: uploadedFiles[0].type,
        textParams: req.params.all()
       });
    });
  },
    download: function (req, res) {
    require('fs').createReadStream(req.param('path'))
    .on('error', function (err) {
      return res.serverError(err);
    })
    .pipe(res);
  }
};

