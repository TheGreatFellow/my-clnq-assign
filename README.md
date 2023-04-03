# <a href="https://my-clnq-assign.vercel.app/">My Clnq Assign(live)<a>

### Design Requirements:

1. The application is a pixel perfect match to the given design
2. Since there was no Redline section to define the size and dimensions, I used the best estimate.
3. While this app can be viewed on PC where I tried to mimic the mobile layout, but it’s best if viewed on a mobile phone <a href="https://my-clnq-assign.vercel.app/">here</a>.

### Functional/Technical Details:

1. As specified, JSON files are lazy loaded one at a time as the user scrolls to the content. A buffer offset of 400px specified to ensure a smooth and seamless scrolling experience for the user.
2. Used TailwindCSS for a faster positioning and styling on the front end
3. Implemented client side search functionality. Used a technique known as debouncing which is used to delay search requests until the user has stopped typing. This prevents multiple continuous search requests, improves UX and performance of the search functionality.
4. Solved the UI edge case by using an ellipsis.

### Known Issues:

1. Unit tests for MoviePage.js is throwing an error, needs to be solved:<br>
   `observer.observe is not a function`
2. Could not solve the missing poster edge case. The solution seemed simple enough, handle the Error and substitute the image source for a fallback image. But for some reason none of the things that I tried worked.
