import React from "react";
import AccordionComponent from '../AccordionComponent/AccordionComponent';

const MobileProject = ({ state }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div style={{ width: '100%' }}>
      {state.map((c, i) => {
        return <AccordionComponent
          handleChange={handleChange}
          expanded={expanded}
          i={i}
          title={c.heading}
          description={c.description}
        />

      })}
    </div>
  );
};

export default MobileProject;
