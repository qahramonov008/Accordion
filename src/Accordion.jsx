import { useState } from "react";

function Accordion({ title, content }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="accordion">
      <div className="accordion-title" onClick={toggleAccordion}>
        {title}
      </div>
      {isExpanded && <div className="accordion-content">{content}</div>}
    </div>
  );
}

export default Accordion;
