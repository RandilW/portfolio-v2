import fetchDataForFirstChart from '../../../app/work/fetchDataForFirstChart';
import fetchDataForSecondChart from '../../../app/work/fetchDataForSecondChart';
import MyChart from '../../../app/work/MyChart';
import styles from "@/app/work/styles/project.module.css";

const projects = [
  {
    index: 1,
    id: "eda",
    title: "Exploratory Data Analysis",
    summary: "Comprehensive data analysis to identify optimal location for a new Mediterranean restaurant.",
    description:
      "Conducted comprehensive data analysis on various datasets, analyzing over 100,000 data points to identify optimal location for a new Mediterranean restaurant.",
    renderChart: async () => {
      const { data: data1, labels: labels1 } = await fetchDataForFirstChart('/data.csv', 'Zip Code', 'Number of Restaurants');
      const { data: data2, labels: labels2 } = await fetchDataForSecondChart('/cleaned_restaurant_inspections.csv', 'Score');
      return (
          <>
            <p className={styles.chart_description}>
              This project presents a comprehensive analysis of the Fort Worth area to identify the optimal location for
              a new Mediterranean restaurant. The analysis includes demographic insights, market competition, restaurant
              inspection scores, commercial land sales, household income by race, employment trends, and means of
              transportation to work. The findings, insights, and recommendations are compiled from various datasets and
              visualizations.
            </p>
            <MyChart data={data1} labels={labels1} chartLabel="Number of Restaurants by Zip Code" borderRadius={2}/>
            <p className={styles.chart_description}>
              The first chart shows the number of restaurants in each zip code. Areas with a higher number of
              restaurants could indicate a high demand for food services.
            </p>
            <MyChart data={data2} labels={labels2} chartLabel="Distribution of Inspection Scores" borderRadius={2}/>
            <p className={styles.chart_description}>
              The second chart is a histogram that shows the distribution of inspection scores. Each bar represents the
              number of restaurants that received a score within the range specified by the bar's label. A high score
              indicates that a restaurant meets or exceeds health and safety standards.
            </p>
            <p className={styles.chart_description}>
              Based on the comprehensive analysis presented in the full report, which includes these charts among other
              data, the optimal location for a new Mediterranean restaurant would be in an area with a high demand for
              food services and high health and safety standards. For more details and a deeper understanding of the
              analysis, please visit &nbsp;
                <a
                    className={styles.social_links}
                    style={{ color: 'rgba(0,0,0,0.55)' }}
                    href="https://docs.google.com/document/d/1gjLDIfn5BJ-pWD_Ze_kdkya-fkTOxLWdk2FGAxoh6S4/preview"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                  the full report
                </a>
              .
            </p>

          </>
      );
    },
    services: ["Data Analysis", "Development"],
    builtOn: ["Nextjs", "Firebase", "ChakraUI"],
    imgSrc: "/mockups/savingspree/savingspree_mockup.png",
    imageGallery: [

    ],
    siteUrl: "https://github.com/RandilW/ECEN-360-501/tree/main/Assignments/Assignment%201",
    featured: true,
  },
  {
    index: 2,
    id: "profmatch",
    title: "ProfMatch",
    summary: "A platform for personalized professor recommendations based on student preferences.",
    description:
        "\"Aggie ProfMatch\", a project that secured second place at the 2023 Howdy Hack, is a student-centric platform offering precise data on professors and courses, with a user-friendly interface and personalized ratings based on AEFIS evaluations..",
    services: ["Design", "Development"],
    builtOn: ["Next.js", "Tailwind CSS", "Axios", "Flask", "Python", "Pandas"],
    imgSrc: "/mockups/profmatch/profmatch1.png",
    imageGallery: [
      "/mockups/profmatch/profmatch2.png",
      "/mockups/profmatch/profmatch3.png",
      "/mockups/profmatch/profmatch4.png",
    ],
    siteUrl: "https://www.aggieprofmatch.com/",
    featured: true,
  },
  {
    index: 3,
    id: "airbnb-clone",
    title: "Airbnb Clone",
    summary: "Project.",
    services: ["Development"],
    builtOn: ["Nextjs", "ChakraUI"],
    description:
        "Project.",
    imgSrc: "/mockups/shades-generator/shades-generator_mockup.png",
    imageGallery: [
      "/mockups/shades-generator/shades-generator1.png",
      "/mockups/shades-generator/shades-generator2.png",
      "/mockups/shades-generator/shades-generator3.png",
    ],
    siteUrl: "https://shades-generator.vercel.app",
  },
  {
    index: 4,
    id: "todo",
    title: "ToDo",
    summary: "Project.",
    description:
        "Project",
    services: ["Design", "Development"],
    builtOn: ["HTML", "CSS", "Javascript"],
    imgSrc: "/mockups/todo/todo_mockup.png",
    imageGallery: [
      "/mockups/mr-lawyer/mr-lawyer1.png",
      "/mockups/mr-lawyer/mr-lawyer2.png",
      "/mockups/mr-lawyer/mr-lawyer3.png",
      "/mockups/mr-lawyer/mr-lawyer4.png",
    ],
    siteUrl: "https://mrlawyerfirm.web.app/",
    featured: false,
  },
  {
    index: 5,
    id: "client-design-project",
    title: "Client Design Project",
    summary: "Project.",
    description:
      "Project",
    services: ["Design", "Development"],
    builtOn: ["TailwindCSS", "HTML"],
    imgSrc: "/mockups/avis-tailors/avistailors_mockup.jpeg",
    imageGallery: [
      "/mockups/avis-tailors/avis-tailors1.png",
      "/mockups/avis-tailors/avis-tailors2.png",
      "/mockups/avis-tailors/avis-tailors3.png",
    ],
    siteUrl: "https://avistailors.netlify.com",
    featured: true,
  },
  {
    index: 6,
    id: "aggiefunds",
    title: "AggieFunds",
    summary: "Projectr",
    description:
      "Project.",
    services: ["Design", "Development"],
    builtOn: ["HTML", "CSS", "Javascript"],
    imgSrc: "/mockups/mr-lawyer/mrlawyer_mockup.jpeg",
    imageGallery: [
      "/mockups/mr-lawyer/mr-lawyer1.png",
      "/mockups/mr-lawyer/mr-lawyer2.png",
      "/mockups/mr-lawyer/mr-lawyer3.png",
      "/mockups/mr-lawyer/mr-lawyer4.png",
    ],
    siteUrl: "https://mrlawyerfirm.web.app/",
    featured: true,
  },
  {
    index: 7,
    id: "revtube",
    title: "RevTube",
    summary: "Project",
    description:
        "Project.",
    services: ["Design", "Development"],
    builtOn: ["HTML", "CSS", "Javascript"],
    imgSrc: "/mockups/revtube/revtube_mockup.png",
    imageGallery: [
      "/mockups/mr-lawyer/mr-lawyer1.png",
      "/mockups/mr-lawyer/mr-lawyer2.png",
      "/mockups/mr-lawyer/mr-lawyer3.png",
      "/mockups/mr-lawyer/mr-lawyer4.png",
    ],
    siteUrl: "https://mrlawyerfirm.web.app/",
    featured: false,
  },
];

export default projects;
