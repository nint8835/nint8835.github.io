import React from "react";

import bottomBarStyles from "./styles/bottom_bar.module.css";
import { Link } from "gatsby";
import Octicon, { GitBranch } from "@primer/octicons-react";

export default () => (
  <div className={bottomBarStyles.bottomBar}>
    <div className={bottomBarStyles.leftItems}>
      <a href="https://github.com/nint8835/rileyflynn.me" className={bottomBarStyles.link}>
        <Octicon icon={GitBranch} /> master
      </a>
    </div>
    <div className={bottomBarStyles.rightItems}>
      <Link to="/credits" key="/credits" className={bottomBarStyles.link}>
        Credits
      </Link>
    </div>
  </div>
);
