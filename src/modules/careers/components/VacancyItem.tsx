import React, { FC } from "react";
import { IVacancy } from "../../../models/IVacancy";
import { Link } from "react-router-dom";

interface VacancyItemProps {
  vacancy: IVacancy;
}

const VacancyItem: FC<VacancyItemProps> = ({ vacancy }) => {
  return (
    <div className={"career-details"}>
      <h3>
        {vacancy.id}. {vacancy.title}
      </h3>
      <p>
        {vacancy.company} - {vacancy.location}
      </p>
      <div className={"links"}>
        <Link to={vacancy.id.toString()}>details</Link>
        <a href={vacancy.link} target={"_blank"}>
          link
        </a>
      </div>
    </div>
  );
};

export default VacancyItem;
