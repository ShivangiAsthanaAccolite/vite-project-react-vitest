function About() {
  return (
    <>
      <div>
        <h5>About Component</h5>
        <button
          disabled
          data-testid="button"
          onClick={() => {
            console.log("Button Clicked");
          }}
        >
          Click Me!
        </button>
        <div>
          <input type="text" data-testid="element-to-focus" />
        </div>
      </div>
    </>
  );
}

export default About;
