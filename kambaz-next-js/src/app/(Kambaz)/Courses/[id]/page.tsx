type Params = {
  params: { id: string };
};

export default function Course({ params }: Params) {
  return (
    <div id="wd-course-screen">
      <h3>Course {params.id}</h3>
      <p>This is a placeholder course page. Content will be added in later chapters.</p>
    </div>
  );
}
