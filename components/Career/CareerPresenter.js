'use client'
import { useEffect, useState } from "react";
import { CareerModel } from "./CareerModel";
import { Career } from "./Career";

const CareerPresenter = () => {
  const [careerData, setCareerData] = useState([]);
  const dataJobs = CareerModel.getJobs();
  const dataCareer = CareerModel.getData();
  
  useEffect(() => {
    setCareerData(dataJobs)
  }, []);
  return <Career careerData={careerData} data={dataCareer} />;
};

export { CareerPresenter }
