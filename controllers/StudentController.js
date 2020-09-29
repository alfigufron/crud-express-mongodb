const studentModel = require('./../models/Student');

const studentController = {
  view: async (req, res) => {
    try {
      let students = await studentModel.find();

      res.render('index', {
        students
      })
    } catch (err) {
      res.redirect('/');
    }
  },

  add: async (req, res) => {
    res.render('add');
  },

  store: async (req, res) => {
    try {
      let data = {
        nis: req.body.nis,
        name: req.body.name,
        class: req.body.class,
      };

      await studentModel.create(data);

      res.redirect('/');
    } catch (err) {
      res.redirect('/add');
    }
  },

  edit: async (req, res) => {
    try {
      let id = req.params.id;
      let student = await studentModel.findOne({
        _id: id
      });

      res.render('edit', {
        student
      });
    } catch (err) {
      res.redirect('/');
    }
  },

  update: async (req, res) => {
    try {
      let id = req.params.id;
      let data = {
        nis: req.body.nis,
        name: req.body.name,
        class: req.body.class,
      };

      await studentModel.findOneAndUpdate(
        {_id: id}, data
      );

      res.redirect('/');
    } catch (err) {
      res.redirect(`/edit/${id}`);
    }
  },

  delete: async (req, res) => {
    try {
      let id = req.params.id;
      await studentModel.deleteOne({
        _id: id
      });

      res.redirect('/');
    } catch (err) {
      res.redirect('/');
    }
  }
}

module.exports = studentController;