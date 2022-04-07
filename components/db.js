const mongoose= require('mongoose')
mongoose.connect(
    "mongodb://localhost:27017/thera",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
      console.log("DB Connect");
    }
  );
