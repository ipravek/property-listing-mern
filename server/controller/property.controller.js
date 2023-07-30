const Property = require("../model/property.model");

const list = async (req, res) => {
  const { search, page = 1, limit = 10, sort = "desc" } = req.query;

  try {
    const skipItems = (page - 1) * limit;
    const findData = {
      isActive: true,
    };

    if (search && search.length > 0) {
      findData.name = { $regex: search, $options: "i" };
    }

    const property = await Property.find(findData)
      .skip(parseInt(skipItems))
      .limit(parseInt(limit))
      .select({
        id: 1,
        name: 1,
        location: 1,
        image: 1,
      })
      .sort({
        createdAt: sort == "desc" ? "desc" : "asc",
      });

    const totalDocs = await Property.countDocuments();

    return res.status(200).json({
      message: "Data Fetched successfully!",
      data: property,
      pagination: {
        total: totalDocs,
        page: parseInt(page),
      },
    });
  } catch (err) {
    console.log(err);

    return res.status(400).json({
      message: "Something went wrong",
    });
  }
};

const create = async (req, res) => {
  const { name, image, location } = req.body;

  try {
    const property = await Property.create({
      name,
      image,
      location,
    });

    const data = {
      id: property._id,
      name: property.name,
      image: property.image,
      location: property.location,
    };

    return res.status(201).json({
      message: "Data created successfully!",
      data,
    });
  } catch (err) {
    console.log(err);

    return res.status(400).json({
      message: "something went wrong",
    });
  }
};

const view = async (req, res) => {
  const { id } = req.params;

  try {
    const property = await Property.findOne({ _id: id, isActive: true }).select(
      {
        id: 1,
        name: 1,
        location: 1,
        image: 1,
      }
    );

    if (!property) {
      return res.status(404).json({
        message: "Data Not Found!",
      });
    }

    return res.status(200).json({
      message: "Data fetched successfully!",
      data: property,
    });
  } catch (err) {
    console.log(err);

    return res.status(400).json({
      message: "something went wrong",
    });
  }
};

const del = async (req, res) => {
  const { id } = req.params;

  try {
    const property = await Property.findOneAndUpdate(
      { _id: id },
      { isActive: false }
    );

    if (property) {
      return res.status(200).json({
        message: "Data deleted successfully!",
      });
    }
  } catch (err) {
    console.log(err);

    return res.status(400).json({
      message: "something went wrong",
    });
  }
};

const update = async (req, res) => {
  const { name, location, image } = req.body;
  const { id } = req.params;

  try {
    const data = {};

    if (name) {
      data.name = name;
    }
    if (location) {
      data.location = location;
    }
    if (image) {
      data.image = image;
    }

    if (Object.keys(data).length) {
      const property = await Property.findOneAndUpdate({ _id: id }, data, {
        new: true,
      }).select({
        id: 1,
        name: 1,
        location: 1,
        image: 1,
      });

      if (property) {
        return res.status(200).json({
          message: "Data updated successfully!",
          data: property,
        });
      }
    }

    return res.status(200).json({
      message: "Noting provided to update",
    });
  } catch (err) {
    console.log(err);

    return res.status(400).json({
      message: "something went wrong",
    });
  }
};

module.exports = {
  list,
  create,
  view,
  del,
  update,
};
