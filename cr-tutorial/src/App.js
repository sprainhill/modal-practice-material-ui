import React from "react";
import "./App.css";
import { Header, Footer } from "./components/layouts";
import Exercises from "./components/exercises";
import { muscles, exercises } from "./store";

function App() {
  const [category, setCategory] = React.useState(0);

  const getExerciseByMuscles = () => {
    return Object.entries(
      exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;
        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];
        return exercises;
      }, {})
    );
  };

  console.log("App getExerciseByMuscles", getExerciseByMuscles());

  const exerciseProps = getExerciseByMuscles();

  const handleCategorySelected = category => {
    setCategory(category);
  };

  return (
    <>
      <Header />
      <Exercises exercises={exerciseProps} />
      <Footer
        muscles={muscles}
        onSelect={handleCategorySelected}
        category={category}
      />
    </>
  );
}

export default App;
