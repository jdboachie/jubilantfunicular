import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import * as React from 'react'
import Image from 'next/image'

const CourseCard = ({course}: {course: {code: string, sem: number, title: string, progress: number}}) => {
  return (
    <Card
      className="flex flex-col w-[250px] h-[250px] bg-white dark:bg-neutral-900 dark:border-neutral-800"
    >
      <Image
       src={`https://avatar.vercel.sh/${course.sem}`}
       alt="user avatar"
       width={1000}
       height={1000}
       className="h-[100px] rounded-t-lg"
      />
      <CardHeader className="grow">
        <CardDescription>Sem {course.sem} | {course.code}</CardDescription>
        <CardTitle>{course.title}</CardTitle>
      </CardHeader>
      <CardFooter className="bordr">
        <Progress value={course.progress} className="w-[100%] border" />
      </CardFooter>
    </Card>
  )
}

export default CourseCard