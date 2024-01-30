"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { showMoreProps } from "@/types";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utils";

const Showmore = ({ pageNumber, isNext }: showMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newlimit = (pageNumber + 1) * 10;
    const newPathname = updateSearchParams("limit", `${newlimit}`);

    router.push(newPathname);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show more"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default Showmore;
