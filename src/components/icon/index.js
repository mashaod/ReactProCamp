import React from "react";

import { ReactComponent as IconGoal } from '../../assets/icons/goal.svg';
import { ReactComponent as IconPenalty } from '../../assets/icons/penalty.svg';
import { ReactComponent as IconRedCard } from '../../assets/icons/red-card.svg';
import { ReactComponent as IconYellowCard } from '../../assets/icons/yellow-card.svg';
import { ReactComponent as IconSubstitution } from '../../assets/icons/substitution.svg';

const Icon = props => {
  switch (props.name) {
    case "Normal Goal":
      return <IconGoal {...props} />;
    case "Penalty":
      return <IconPenalty {...props} />;
    case "Red Card":
      return <IconRedCard {...props} />;
    case "Yellow Card":
      return <IconYellowCard {...props} />;
    case "substitutions":
      return <IconSubstitution {...props} />;
    default:
      return <IconSubstitution {...props} />;
  }
};

export default Icon;