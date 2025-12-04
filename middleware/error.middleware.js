const errorMiddleware = (err, req, res) => {
  try {
    let error = { ...err };
    error.message = err.message;
    console.error(err);

    // Mongoose bad objectId
    if (err.name === "CastError") {
      const message = "Resources not found";
      error = new Error(message);
      error.statuscode = 404;
    }

    // Mongoose duplicate key
    if (err.code === 11000) {
      const message = "Duplicate key values";
      error = new Error(message);
      error.statuscode = 400;
    }

    // Mongoose validation error
    if (err.code === "ValidationError") {
      const message = Object.values(err.errors).map((val) => {
        val.message;
      });
      error = new Error(message.join(", "));
      error.statuscode = 400;
    }

    res
      .status(error.statuscode || 500)
      .json({ success: false, error: error.message || "Server Error" });
  } catch (error) {
    console.error(error);
  }
};

export default errorMiddleware;
