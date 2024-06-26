"use client";
import baseData from "@/types/userBaseData";
import MainLayout from "../Layout/mainLayout";
import EditGoals from "./EditGoalsButton";
import EditGoalsButton from "./EditGoalsButton";
import { useState } from "react";
import CreateGoalModal from "./CreateGoalModal";
import GoalsTable from "./GoalsTable";

export default function GoalsComponent({ data }: { data: baseData }) {
  const [goalsModalShown, setGoalsModalShown] = useState(false);
  return (
    <>
      {goalsModalShown ? (
        <CreateGoalModal
          closeLogic={(ev) => {
            setGoalsModalShown(false);
          }}
        />
      ) : (
        <></>
      )}
      <MainLayout data={data}>
        <div className=" w-full h-full ">
          <div className=" w-full h-20 bg-ml-pink text-white flex justify-center items-center text-3xl">
            <h2>myLife goals</h2>
          </div>
          <div className=" w-full bg-ml-pink h-10 flex justify-end">
            <EditGoalsButton
              onClick={(ev) => {
                setGoalsModalShown(true);
              }}
            />
          </div>
          <div className=" w-full h-[80%] grid place-items-center">
            <GoalsTable />
          </div>
        </div>
      </MainLayout>
    </>
  );
}
