import React from "react";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();
  
  

  const goTo = (path) => {
    navigate(path);
  };

  const navigatePropsTrue = () => {
      navigate("/online-state?online=true", {
        state: { online: true },
    }
    );
  };
  const navigatePropsFalse = () => {
    navigate("/online-state?online=false", {
      state: { online: false },
  }
  );
};
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => goTo("/profile")}>Go to Profile</button>
      <button onClick={navigatePropsTrue}>
        Go to Page whith State / Query Params TRUE
      </button>
      <button onClick={navigatePropsFalse}> Go to Page whith State / Query Params FALSE</button>
     
    </div>
  );
};

export default HomePage;
