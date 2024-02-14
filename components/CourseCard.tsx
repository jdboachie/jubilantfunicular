import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import * as React from 'react'
import Image from 'next/image'

const CourseCard = ({course}: {course: {code: string, sem: number, title: string, progress: number}}) => {
  return (
    <Card
      className="
      hover:scale-[.97] hover:shadow-lg shadow-none transform ease-in-out duration-200 cursor-pointer max-w-[300px] p-2
      rounded-lg flex flex-col w-full min-h-[200px] h-fit bg-white dark:bg-neutral-950 border dark:border-neutral-800"
    >
      <Image
        src={`https://avatar.vercel.sh/blue`}
        alt="user avatar"
        width={1000}
        height={1000}
        className="h-24 border-b dark:border-b-neutral-800 opacity-10 rounded-md"
      />
      <CardHeader className="grow p-2">
        <CardDescription className="text-neutral-500 text-xs">Sem {course.sem} | {course.code}</CardDescription>
        <CardTitle className="text-sm">{course.title}</CardTitle>
      </CardHeader>
      <CardFooter className="flex flex-col gap-1 p-2">
        <p className="text-xs w-full">{course.progress}%</p>
        <div className="h-3 w-full bg-neutral-100 dark:bg-black rounded-full">
          <div
            className="h-full bg-blue-500 rounded-full"
            style={{width: `${course.progress}%`}}
          >
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

export default CourseCard