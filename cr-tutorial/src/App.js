import React from "react";
import "./App.css";
import { Header, Footer } from "./components/layouts";
import Exercises from "./components/exercises";
import { muscles, seedExercises } from "./store";

function App() {
  const [category, setCategory] = React.useState("");
  const [exercise, setExercise] = React.useState("");
  const [exercisesOnState, setExercisesOnState] = React.useState(seedExercises);
  // console.log("App seedExercises", seedExercises);

  const getExerciseByMuscles = () => {
    return Object.entries(
      exercisesOnState.reduce((exercises, exercise) => {
        const { muscles } = exercise;
        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];
        return exercises;
      }, {})
    );
  };

  // console.log("App getExerciseByMuscles", getExerciseByMuscles());

  const exerciseProps = getExerciseByMuscles();

  const handleCategorySelected = category => {
    setCategory(category);
  };

  const handleExerciseSelected = id => {
    // console.log("exercises", exercises);
    const selected = exercisesOnState.find(exercise => exercise.id === id);

    setExercise(selected);
    // handleCategorySelected(selected);
  };

  const onCreate = exercise => {
    console.log("App onCreate exercise", exercise);
    setExercise(exercise);
  };

  return (
    <>
      <Header muscles={muscles} onCreate={onCreate} />
      <Exercises
        exercises={exerciseProps}
        exercise={exercise}
        category={category}
        onSelect={handleExerciseSelected}
      />
      <Footer
        muscles={muscles}
        onSelect={handleCategorySelected}
        category={category}
      />
    </>
  );
}

export default App;
