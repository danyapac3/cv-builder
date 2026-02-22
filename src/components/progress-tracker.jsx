import "../styles/progress-tracker.css";

function ProgressTracker({ numberOfPages = 10, currentPage = 5 }) {
  return (
    <div className="progress-tracker">
      {Array.from({ length: numberOfPages }).map((_, index) => {
        if (index === currentPage) {
          return (
            <div
              key={index}
              className="progress-tracker__dot progress-tracker__dot--active"
            ></div>
          );
        }
        return <div key={index} className="progress-tracker__dot"></div>;
      })}
    </div>
  );
}

export default ProgressTracker;
