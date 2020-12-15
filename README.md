# Polluto

### Polluto is a real-time worldwide pollution tracker built in ReactJS, using geolocation, Google Maps API and AirVisual API. Deployed with Heroku.

This was the final project for my General Assembly course, December 2020. And also my first big project done in React!

https://polluto.herokuapp.com/

N.B.: The Polluto app can only take 5 API calls per minute, so pace yourself! 🙃

## Upcoming features:

I'll be working on adding the following features:

- If map zoom is less than 9, hide Card component.
- Add close button to top-right of Card component. Hide the component on button click. (Card component will show again when pan/zoom takes different coords).
- Add burger menu to navigation (top-right): Pollution Levels explainer and About pages. OnClick burger menu switches to close button.
- Design content pages (About and Pollution Levels). 
- Add search box that takes a City. Update map coords accordingly. Update the Card component data with City's data.
- Add a Login and Sign Up feature. Sync with Firebase for user accounts. Store a real-time database of users, including User Authentication.
- Migrate to a new domain.
