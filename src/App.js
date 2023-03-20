import "./App.css";
import "./reactiveStyles.css";
import "./fonts/Ubuntu-Bold.ttf";
import "./fonts/Ubuntu-Medium.ttf";
import "./fonts/Ubuntu-Regular.ttf";
import React, { useState } from "react";
import PersonInfo from "./Components/PersonInfo";
import SelectPlan from "./Components/SelectPlan";
import AddOns from "./Components/AddOns";
import FinishingUp from "./Components/FinishingUp";
import Conformation from "./Components/Conformation";
import ValidationPopUp from "./Components/ValidationPopUp";
import PageIndicator from "./Components/PageIndicator";
import NaviagtionBar from "./Components/NaviagtionBar";
import { Routes, Route, useNavigate } from "react-router-dom";

const cost = {
  Arcade: 9,
  Advanced: 12,
  Pro: 15,
  Online_service: 1,
  Larger_storage: 2,
  Customizable_profile: 2,
};

function App() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    plan: "",
    yearly_billing: false,
    addons: [],
  });
  /* handles all inputs into the form */
  const handleFormUpdate = (event, inputType) => {
    const input = event.target.name;
    const value = event.target.value;

    /* handles the Personal information and plan selection */
    if (inputType === "text" || inputType === "select") {
      setFormState((prev) => ({ ...prev, [input]: value }));
    } else if (inputType === "toggle") {
      /* handles whether the plan is paid monthly or yearly */
      setFormState((prev) => ({
        ...prev,
        yearly_billing: !prev.yearly_billing,
      }));
      /* handles including Addons to the plan */
    } else if (inputType === "checkbox") {
      // makes sure there are no duplicate addions
      if (formState.addons.includes(input)) {
        const newFormStateAddons = formState.addons.filter(
          (addon) => addon !== input
        );
        setFormState((prev) => ({
          ...prev,
          addons: newFormStateAddons,
        }));
        // handles first addition of addons
      } else {
        setFormState((prev) => ({
          ...prev,
          addons: [...prev.addons, input],
        }));
      }
    }
  };

  /* creates pop up incase someone fails to select a plan */
  const [showValidationPopup, setShowValidationPopup] = useState(false);

  const handlePopup = () => {
    setShowValidationPopup((prev) => !prev);
  };

  const validateStep = () => {
    const pathList = ["/", "/select-plan", "/add-ons", "/finishing-up"];
    const currentPath = window.location.pathname;
    const pathIdx = pathList.indexOf(currentPath);

    if (pathIdx === 0) {
      // Validate the Personal Info step
      if (
        formState.name.trim() === "" ||
        formState.email.trim() === "" ||
        formState.phoneNumber.trim() === ""
      ) {
        return false;
      }
    } else if (pathIdx === 1) {
      // Validate the Select Plan step
      if (formState.plan === "") {
        handlePopup();
        return false;
      }
    }
    return true;
  };
  /* handles nagivation by a react-router hook and looping through route paths */
  const navigate = useNavigate();
  const handleNavagation = (goBack) => {
    const pathList = [
      "/",
      "/select-plan",
      "/add-ons",
      "/finishing-up",
      "/conformation",
    ];
    const currentPath = window.location.pathname;
    const pathIdx = pathList.indexOf(currentPath);
    if (goBack) {
      navigate(pathList[(pathIdx - 1) % pathList.length]);
    } else {
      if (validateStep()) {
        navigate(pathList[(pathIdx + 1) % pathList.length]);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <PageIndicator />
        <div className="outer">
          <div className="inner flexColumn">
            {showValidationPopup && (
              <ValidationPopUp handlePopup={handlePopup} />
            )}
            <Routes>
              <Route
                path="/"
                element={
                  <PersonInfo
                    formState={formState}
                    handleFormUpdate={handleFormUpdate}
                  />
                }
              />
              <Route
                path="/select-plan"
                element={
                  <SelectPlan
                    cost={cost}
                    formState={formState}
                    handleFormUpdate={handleFormUpdate}
                  />
                }
              />
              <Route
                path="/add-ons"
                element={
                  <AddOns
                    cost={cost}
                    formState={formState}
                    handleFormUpdate={handleFormUpdate}
                  />
                }
              />
              <Route
                path="/finishing-up"
                element={<FinishingUp cost={cost} formState={formState} />}
              />
              <Route path="/conformation" element={<Conformation />} />
            </Routes>
          </div>

          {/* navagation bar */}
          {window.location.pathname !== "/conformation" && (
            <NaviagtionBar handleNavagation={handleNavagation} />
          )}
        </div>
      </form>
    </div>
  );
}

export default App;
