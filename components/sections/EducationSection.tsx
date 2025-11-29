import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import EducationSectionClient from "./EducationSectionClient";

const EDUCATION_QUERY = defineQuery(`
  *[_type == "education"] 
  | order(endDate desc, startDate desc) {
    institution,
    degree,
    fieldOfStudy,
    startDate,
    endDate,
    current,
    gpa,
    description,
    achievements,
    logo,
    website,
    certificateImage,
    order
  }
`);

export async function EducationSection() {
  const { data: education } = await sanityFetch({ query: EDUCATION_QUERY });

  if (!education || education.length === 0) {
    return null;
  }

  return <EducationSectionClient education={education} />;
}

export default EducationSection;
