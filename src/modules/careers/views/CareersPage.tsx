import React, { FC } from "react";
import { careerAPI } from "../services/CareerService";
import List from "../../../components/shared/List";
import VacancyItem from "../components/VacancyItem";
import { Link } from "react-router-dom";

const CareersPage: FC = () => {
  const { data: careers } = careerAPI.useFetchAllCareersQuery();

  return (
    <div className={"careers"}>
      {careers && (
        <List
          items={careers}
          renderItem={(vacancy) => (
            <VacancyItem key={vacancy.id} vacancy={vacancy} />
          )}
        />
      )}
    </div>
  );
};

export default CareersPage;
