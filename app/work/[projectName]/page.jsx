"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { redirect } from "next/navigation";
import CommonLoader from "@/app/components/commonComponents/CommonLoader";
import projects from "@/app/components/json/projects";
import Project from "../components/Project";

const ProjectPage = ({ params }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 800);
  }, []);

  const projectDetails = projects.filter(
    (details) => details.id === params.projectName
  );

  if (!projectDetails.length) {
    redirect("/lost");
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <CommonLoader
            name={projectDetails.length ? projectDetails[0].title : "Error"}
          />
        ) : null}
      </AnimatePresence>

      {(() => {
        if (projectDetails.length) {
          return <Project details={projectDetails[0]} />;
        }
        return null;
      })()}
    </>
  );
};

export default ProjectPage;
