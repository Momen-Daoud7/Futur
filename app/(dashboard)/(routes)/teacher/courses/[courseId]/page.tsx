const page = ({ params }: { params: { courseId: string } }) => {
  return <div>Course Id: {params.courseId}</div>;
};
export default page;
