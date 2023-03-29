import React from "react";
import { Divider } from "semantic-ui-react";
import s from "./Divider.module.scss";

const DividerExampleDivider = () => (
  <div className={s.divider}>
    <Divider className={s.dividerContainer} fitted />
  </div>
);

export default DividerExampleDivider;
