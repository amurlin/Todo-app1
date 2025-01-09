import React from 'react'
import { Button } from './Button'

export const Status = (props) => {
    const {setFilterState, filterState} = props;
    const handleFilterState = (state) => {
        setFilterState(state);
      };
  return (
    <div className="status">
            <Button
              className={`statusButton ${filterState === "ALL" ? "active" : "defualt"}`}
              handleEvent={() => handleFilterState("ALL")}
              title={"All"}
            />
            <Button
              className={`statusButton ${filterState === "ACTIVE" ? "active" : "defualt"}`}
              handleEvent={() => handleFilterState("ACTIVE")}
              title={"Active"}
            />
            <Button
              className={`statusButton ${filterState === "DONE" ? "active" : "defualt"}`}
              handleEvent={() => handleFilterState("DONE")}
              title={"Completed"}
            />
          </div>
  );
};
