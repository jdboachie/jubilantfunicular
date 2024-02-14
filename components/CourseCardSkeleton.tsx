import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const CourseCardSkeleton = () => {
  return (
    <>
      <div
      className="
        isolate
        overflow-hidden
        rounded-md

        before:border-t before:border-rose-100/10
        relative
        before:absolute before:inset-0
        before:-translate-x-full
        before:animate-[shimmer_2s_infinite]
        before:bg-gradient-to-r
        before:from-transparent before:via-neutral-100/50 dark:before:via-neutral-800 before:to-transparent"
    >
    <Card
      className="
        h-[200px] shadow-none border-none dark:bg-black w-full cursor-not-allowed space-y-4 flex flex-col justify-between rounded-lg bg-neutral-100/10 p-2
      ">
      <div className="flex flex-col gap-2">
        <div className="h-24 rounded-md bg-neutral-100/50 dark:bg-neutral-800/50"></div>
        <div className="space-y-2">
          <div className="h-3 w-3/5 rounded-md bg-neutral-100/50 dark:bg-neutral-800"></div>
          <div className="h-3 w-2/5 rounded-md bg-neutral-100/50 dark:bg-neutral-800"></div>
        </div>
      </div>
      <div className="w-full flex flex-col pb-4 justify-start items-start space-y-1">
        <div className="h-3 w-1/5 rounded-md bg-neutral-100/50 dark:bg-neutral-800"></div>
        <div className="h-3 w-full rounded-md bg-neutral-100/50 dark:bg-neutral-800"></div>
      </div>
    </Card>
    {/* <div className="bg-gradient-to-r from-transparent via-neutral-200/50 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"/> */}
    </div>
    </>
  )
}

export default CourseCardSkeleton