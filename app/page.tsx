import CourseCard from "@/components/CourseCard";
import { Calendar } from "@/components/ui/calendar";

export default function Home() {
  const courses = [
    {code: 'COE181', sem: 1, title: "Applied Electricity", progress: 2},
    {code: 'COE363', sem: 1, title: "Data Structures and Algorithms", progress: 33},
    {code: 'COE381', sem: 1, title: "Microprocessors", progress: 0},
    {code: 'COE387', sem: 1, title: "Classical Control Systems", progress: 12},
    {code: 'COE371', sem: 1, title: "Linear Electronic Circuits", progress: 0},
    {code: 'MATH351', sem: 1, title: "Numerical Analysis", progress: 67}
  ]
  return (
    <main className="h-full flex w-full ml-[300px] p-4 gap-4 bg-neutral-50 dark:bg-black">
      <div className="w-3/4 border grid grid-cols-3 justify-center items-start mx-auto gap-2 flex-wrap">
        {courses.map((course: any, key: number) => (
          <CourseCard
            course={course}
            key={key}
          />
        ))}
      </div>
      <div className="flex h-full flex-col w-1/4 gap-2">
        <div className="bg-white dark:bg-neutral-900 border rounded-md">
          <Calendar />
        </div>
        <div className="h-1/2">
          <p className="">Upcoming events</p>
        </div>
      </div>
    </main>
  );
}
