import LearningTips from "@/component/LearningTips";
import PopularCourses from "@/component/PopularCourses";
import Banner from "@/component/shared/Banner";
import TopInstructors from "@/component/TopInstructor";
import TrendingCourses from "@/component/TrendingCourses";


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <PopularCourses />
      <LearningTips />
      <TopInstructors />
      <TrendingCourses />
    </div>
  );
}
