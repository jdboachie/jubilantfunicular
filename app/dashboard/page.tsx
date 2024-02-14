import CourseCard from "@/components/CourseCard";
import CourseCardSkeleton from "@/components/CourseCardSkeleton";
import { Calendar } from "@/components/ui/calendar"
import { ScrollArea } from "@/components/ui/scroll-area";
import Event from '@/components/Event'


export default function Home() {

  const courses = [
    {code: 'COE181', sem: 1, title: "Applied Electricity", progress: 2},
    {code: 'COE363', sem: 1, title: "Data Structures and Algorithms", progress: 33},
    {code: 'COE381', sem: 1, title: "Microprocessors", progress: 45},
    {code: 'COE387', sem: 1, title: "Classical Control Systems", progress: 12},
    {code: 'COE371', sem: 1, title: "Linear Electronic Circuits", progress: 10},
    {code: 'MATH351', sem: 1, title: "Numerical Analysis", progress: 67},
  ]

  return (
    <ScrollArea className="h-[calc(100vh-70px)] flex lg:ml-[300px] p-2">
      <div className="flex gap-2 h-full">
        <div className="flex flex-col lg:w-3/4 gap-2">
          <div className="w-full space-y-4 py-4 h-fit rounded-md border dark:border-neutral-800 bg-white dark:bg-black p-4">
            <p className="text-neutral-500">Announcements</p>
            <div className="text-xs text-neutral-500">
              No new announcements
            </div>
          </div>
          <div className="w-full space-y-4 py-4 h-full rounded-md border dark:border-neutral-800 bg-white dark:bg-black p-4">
            <p className="text-neutral-500">Course overview</p>
            <div className="grid grid-cols-3 gap-2">
              {courses.map((course: any, key: number) => (
                <CourseCard
                course={course}
                key={key}
                />
              ))}
              <CourseCardSkeleton />
              <CourseCardSkeleton />
              <CourseCardSkeleton />
            </div>
            </div>
        </div>
        <div className="lg:w-fit flex flex-col gap-2 w-full border dark:border-neutral-800 rounded-md bg-white dark:bg-black p-2">
          <div className="bg-neutral-50 dark:bg-neutral-950 rounded-md hover:border-black dark:hover:border-white mx-auto">
            <Calendar />
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-950 rounded-md grow p-2 gap-4 flex flex-col text-xs">
            <p className="text-neutral-500">Upcoming Events</p>
            <Event />
            <Event />
            <Event />
            <Event />
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
