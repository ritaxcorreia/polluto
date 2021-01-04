# Polluto

### Polluto is a real-time worldwide pollution tracker built in ReactJS, using geolocation, Google Maps API and AirVisual API. Deployed with Netlify.

This was the final project for my General Assembly course, December 2020. And also my first big project in React!

https://polluto.netlify.app/

![Polluto Screenshot](https://raw.githubusercontent.com/ritaxcorreia/polluto/main/public/screenshot2.png)

N.B.: The free plan on AirVisual API caps at 5 API calls per minute, so pace yourself! If you notice the pollution card not showing, that will be why. Wait a bit and it will show again 🙃

## Upcoming features:

I'll be working on adding the following features:

- Add close button to top-right of Card component. Hide the component on button click. (Card component will show again when pan/zoom takes different coords).
- If Google Map zoom is less than 9, hide Card component.
- Add burger menu to navigation (top-right): Pollution Levels explainer and About pages. OnClick burger menu switches to close button.
- Design content pages (About and Pollution Levels). 
- Add search box that takes a City. Update map coords accordingly. Update the Card component data with City's data.
- Add a Login and Sign Up feature. Sync with Firebase for user accounts. Store a real-time database of users, including User Authentication.
- Migrate to a custom domain.
