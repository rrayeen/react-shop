import React from "react";
import Empty from "./Empty";
import GoBackButton from "./GoBackButton";

export default function EmptyState() {
  return (
    <>
      <div className="z-index-10 relative h-screen w-full  ">
        <div className="flex items-center justify-between p-4 bg-transparent">
          <GoBackButton></GoBackButton>
          <GoBackButton type="home"></GoBackButton>
        </div>
        <Empty></Empty>
      </div>
    </>
  );
}
