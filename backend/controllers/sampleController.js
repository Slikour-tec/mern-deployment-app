import Sample from "../models/sampleModel.js";
export const getSamples = async (req, res) => {
  const samples = await Sample.find();
  res.json(samples);
};
export const createSample = async (req, res) => {
  const { name, message } = req.body;
  const newSample = await Sample.create({ name, message });
  res.status(201).json(newSample);
};
