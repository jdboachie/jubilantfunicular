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
      hover:scale-[.97] hover:shadow-sm transform ease-in-out duration-200 cursor-pointer
      rounded-md shadow-none flex flex-col w-full min-h-[250px] h-fit bg-white dark:bg-neutral-900 dark:border-neutral-800"
    >
      <Image
       src={`https://avatar.vercel.sh/${course.title}`}
       alt="user avatar"
       width={1000}
       height={1000}
       className="h-[90px] border-b dark:border-b-neutral-800 opacity-10 dark:opacity-40 rounded-t-md"
      />
      <CardHeader className="grow">
        <CardDescription>Sem {course.sem} | {course.code}</CardDescription>
        <CardTitle>{course.title}</CardTitle>
      </CardHeader>
      <CardFooter className="flex flex-col gap-1">
        <p className="text-xs w-full">{course.progress}%</p>
        <div className="h-2 w-full bg-neutral-100 dark:bg-black rounded-full">
          <div
            className="h-full bg-green-500 rounded-full"
            style={{width: `${course.progress}%`}}
          >
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

export default CourseCard