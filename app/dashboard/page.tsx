import CourseCard from "@/components/CourseCard";
import ScrollArea from "@/components/ScrollArea";


export default function Home() {

  const courses = [
    {code: 'COE181', sem: 1, title: "Applied Electricity", progress: 2},
    {code: 'COE363', sem: 1, title: "Data Structures and Algorithms", progress: 33},
    {code: 'COE381', sem: 1, title: "Microprocessors", progress: 45},
    {code: 'COE387', sem: 1, title: "Classical Control Systems", progress: 12},
    {code: 'COE371', sem: 1, title: "Linear Electronic Circuits", progress: 10},
    {code: 'MATH351', sem: 1, title: "Numerical Analysis", progress: 67},
    {code: 'MATH351', sem: 1, title: "Numerical Analysis", progress: 67},
    {code: 'MATH351', sem: 1, title: "Numerical Analysis", progress: 67},
    {code: 'MATH351', sem: 1, title: "Numerical Analysis", progress: 67},
    {code: 'MATH351', sem: 1, title: "Numerical Analysis", progress: 67},
  ]
  return (
    <main className="h-fit min-h-full flex w-full ml-[300px] p-4 gap-4">
      <div className="w-3/4 h-full rounded-md border dark:border-neutral-800 bg-white dark:bg-black p-2">
        <ScrollArea className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 justify-start items-start">
          {courses.map((course: any, key: number) => (
            <CourseCard
            course={course}
            key={key}
            />
            ))}
        </ScrollArea>
      </div>
      <div className="w-1/4 border dark:border-neutral-800 rounded-md bg-white dark:bg-black p-4">
        <p className="text-neutral-500">Quick Info</p>
      </div>
    </main>
  );
}
