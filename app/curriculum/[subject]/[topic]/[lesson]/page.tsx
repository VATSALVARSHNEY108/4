import { notFound } from "next/navigation";
import { getSubjectFromFS, getSubjectsFromFS } from "@/lib/content-registry";
import LessonLoader from "@/components/LessonLoader";
import { LESSON_LOADERS } from "@/lib/lesson-loaders.generated";

export const dynamic = 'force-static';
export const dynamicParams = true;

export async function generateStaticParams() {
  const subjects = await getSubjectsFromFS();
  return subjects.flatMap((subject) =>
    subject.topics.flatMap((topic) =>
      topic.lessons.map((lesson) => ({
        subject: subject.id,
        topic: topic.id,
        lesson: lesson.id,
      }))
    )
  );
}

export default async function LessonPage({ 
  params 
}: { 
  params: Promise<{ subject: string; topic: string; lesson: string }> 
}) {
  const { subject: subjectId, topic: topicId, lesson: lessonId } = await params;
  
  const subjectData = await getSubjectFromFS(subjectId);
  if (!subjectData) notFound();

  const topicData = subjectData.topics.find(t => t.id.toLowerCase() === topicId.toLowerCase());
  if (!topicData) notFound();

  const lessonIdx = topicData.lessons.findIndex(l => l.id.toLowerCase() === lessonId.toLowerCase());
  if (lessonIdx === -1) notFound();

  const lessonData = topicData.lessons[lessonIdx];
  const prevLesson = lessonIdx > 0 ? topicData.lessons[lessonIdx - 1] : null;
  const nextLesson = lessonIdx < topicData.lessons.length - 1 ? topicData.lessons[lessonIdx + 1] : null;

  let Component = null;
  try {
    const loaderKey = `${subjectData.id}/${topicData.id}/${lessonData.id}`;
    const loader = LESSON_LOADERS[loaderKey];
    if (!loader) {
      throw new Error(`Missing lesson loader for ${loaderKey}`);
    }
    const mod = await loader();
    Component = mod.default;
  } catch (err) {
    console.error("Failed to load lesson component:", err);
    return (
      <div className="p-24 flex flex-col items-center text-center text-white">
        <h2 className="text-xl font-bold mb-2">Lesson Load Failed</h2>
        <p>Could not load lesson "{lessonData.id}".</p>
      </div>
    );
  }

  return (
    <LessonLoader 
      subjectId={subjectData.id}
      topicId={topicData.id}
      lessonId={lessonData.id} 
      lessonName={lessonData.name}
      subjectName={subjectData.name}
      topicName={topicData.name}
      prevLesson={prevLesson ? { id: prevLesson.id, name: prevLesson.name } : null}
      nextLesson={nextLesson ? { id: nextLesson.id, name: nextLesson.name } : null}
    >
      <Component />
    </LessonLoader>
  );
}
