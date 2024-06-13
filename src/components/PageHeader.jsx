const TopBackIcon = (props) => {
  return (
    <svg
      className={props.className}
      role="img"
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="currentColor"
    >
      <path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"></path>
    </svg>
  );
};

const TopForwardIcon = (props) => {
  return (
    <svg
      className={props.className}
      role="img"
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="currentColor"
    >
      <path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"></path>
    </svg>
  );
};

const PageHeader = (props) => {
  const goBack = () => {
    window.history.back();
  };

  const goForward = () => {
    window.history.forward();
  };

  return (
    <header className={props.className}>
      <nav className="flex justify-between">
        <div className="flex gap-2">
          <button className="bg-black/70 rounded-full p-2" onClick={goBack}>
            <TopBackIcon className="size-4 text-white" />
          </button>
          <button className="bg-black/70 rounded-full p-2" onClick={goForward}>
            <TopForwardIcon className="size-4 text-white" />
          </button>
        </div>
        <div>Icono</div>
      </nav>
    </header>
  );
};

export default PageHeader;
