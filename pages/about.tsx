function About() {
  return (
    <>
      <main className="pt-28 flex items-center flex-col text-center">
        <h1 className="text-3xl text-center">About Me</h1>

        <p className="max-w-580px pt-2">
          Hi {"I'm"} Henry, and I am a full stack developer with a lot of
          experience in the React, Svelte and Typescript ecosystem.
        </p>

        <h2 className="pt-8 text-2xl max-w-500px">
          Some of the technologies I have experience with...
        </h2>

        <i className="fa-brands fa-react" />
        {/* <IconSlider /> */}
      </main>
    </>
  );
}

export default About;
