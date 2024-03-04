import Task from '../models/task.model.js'

export const getTasks = async (req, res) => {
  const result = await Task.find({
    user: req.user.id
  }).populate('user')
  res.json(result)
}

export const getTask = async (req, res) => {
  const result = await Task.findById(req.params.id).populate('user')

  if (!result) return res.status(404).json({message: 'task not found'})
  res.json(result)
}

export const createTask = async (req, res) => {
  const { title, description, date } = req.body;

  const newTask = new Task({
    title,
    description,
    date,
    user: req.user.id
  });

  const savedTask = await newTask.save();
  res.json(savedTask);
};

export const deleteTask = async (req, res) => {
   const result = await Task.findByIdAndDelete(req.params.id);
   if (!result) return res.status(404).json({ message: "task not found" });
   res.sendStatus(204);
};

export const updateTask = async (req, res) => {
  const result = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true});
  if (!result) return res.status(404).json({ message: "task not found" });
  res.json(result);
};