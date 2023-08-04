import type { FC } from "react";
import { Link, useParams } from "react-router-dom";
import { careerAPI } from "../services/CareerService";
import React from "react";

const VacancyDetails: FC = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: vacancy,
    isLoading,
    isError,
  } = careerAPI.useFetchCareerByIdQuery(id ? parseInt(id) : 0);

  return (
    <div className={"career-details"}>
      {isLoading && <div>Loading...</div>}
      {isError && (
        <div>
          <div>Sorry, given vacancy does not exist 🥲</div>
          <div>
            Go back to <Link to={"/careers"}>careers page</Link>
          </div>
        </div>
      )}
      {vacancy && (
        <div>
          <h3>
            {vacancy.id}. {vacancy.title}
          </h3>
          <p>
            {vacancy.company} - {vacancy.location}
          </p>
          <a href={vacancy.link} target={"_blank"}>
            link
          </a>
        </div>
      )}
    </div>
  );
};

export default VacancyDetails;
