

# Code and Design Decisions

- Initial commit set the assignment up with tooling to hit the ground running once I begin.
- Used a boilerplate component generator I wrote a while back.
- Grabbed some handy mixins from my stash for styling.
- Decided to start with Routing first instead of working it at the last minute.
- Would have loved to be more cleaver with the API call, and it should have been mocked and tested, I planned to backfill but did not have the time.
- Had some fun with using vanilla JS to format some data, which took me back a bit.
- Change the Listing Date grey from the Figma Mock because it didn't produce enough contrast ratio for Accessibility.
- Used `useEffect` hook to set `document.title` where I would generally use a library like React Helmet or similar.
- Avoided using SVG's as resources, instead returned them directly through the component.
- Added a few formatting helpers using mostly vanilla JS.

---
# Todos
- ## Design
  - [x] Responsive Design
  - [x] Global Sticky Header
  - [x] Main Content Area
  - [x] Semantic Markup
  - [x] Reference [Figma Mock](https://www.figma.com/file/YZyIbis7fMsKnE2KaRlhYc/Sample-Project-Engineering?node-id=0%3A1) for styling decisions
- ## Development
  - [x] Interface for API Data
  - [x] Fetch API Data
  - [x] Cache Data using LocalStorage
  - [x] Add a way for users to Favorite a Listing

