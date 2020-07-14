const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: new Date(),
  },
  excercise: [
    {
      name: {
        type: String,
        trim: true,
        required: "Enter a type of exercise:",
      },
      type: {
        type: String,
        trim: true,
        required: "Enter an exercise name:",
      },
      weight: {
        type: Number,
        trim: true,
        required: "Enter a weight",
      },

      sets: {
        type: Number,
        trim: true,
        required: "Enter a number of sets",
      },
      reps: {
        type: Number,
        trim: true,
        required: "Enter a number of reps",
      },
      duration: {
        type: Number,
        trim: true,
        required: "Enter an amount of time",
      },
    },
  ],
  // excercise: [
  //   {
  //       name : String,
  //       type : String,
  //       weight : Number,
  //       sets : Number,
  //       reps : Number,
  //       duration : Number
  //   }
  // ]
});

// add calc total weight
Workout.method.calcTotalDuration = function () {
  this.totalDuration = this.excercise.reduce; /*(find sum of duration)*/
};

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
