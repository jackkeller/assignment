import React, { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DevelopersNotes: FC<unknown> = () => {
  useEffect(() => {
    // Terrible Use of this Hook
    document.title = 'Developers Notes - Fictitious Agency';
  }, []);

  return (
    <div className="developersnotes">
      <h2>Final Thoughts</h2>
      <p>
        I really enjoyed taking this assessment, after working the past few
        months on an Angular project it was fun to get back to React. I would
        say that I think this is a lot of work to try to accomplish in three
        hours, so I had to cut a few corners. I did not devote enough time to
        testing as I would have liked, but that's probably understandable.
      </p>
      <p>
        Feel free to reach out with any questions, and I'm more than happy to
        address whatever madness you might find 😜.
      </p>
      <p>
        Click here to head back to the <Link to="/">Home Page</Link>
      </p>
    </div>
  );
};

export default DevelopersNotes;
