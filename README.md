# CS465-fullstack development
CS-465 Full Stack Development with Mean


Architecture

Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).

Throughout this project, I used several approaches to frontend development. The Express application used server-side rendering with HTML templates to generate pages and display content to the user. JavaScript provided additional functionality and allowed the application to process data and respond to user interactions. This approach required the server to process requests and return rendered content to the browser.

The Angular single-page application (SPA) provided a more dynamic approach. Instead of loading an entirely new webpage after each interaction, Angular uses reusable components, routing, data binding, and services to dynamically update the interface. The SPA was especially useful for the administrative portion of the Travlr application because administrators could view, add, and edit trip information through an interactive interface. Compared with the Express frontend, the Angular SPA provides a more responsive experience and separates frontend functionality into reusable components.

Why did the backend use a NoSQL MongoDB database?

MongoDB was used because its document-based NoSQL structure works well with the JSON-like data used throughout the application. Trip records can be represented as documents containing properties such as the trip code, name, resort, length, price, image, and description. MongoDB also provides flexibility because its document structure can be modified as application requirements change without requiring the rigid table relationships associated with a traditional relational database. Mongoose was used to define schemas and provide structured interaction between the application and MongoDB.

Functionality

How is JSON different from JavaScript and how does JSON tie together the frontend and backend development pieces?

JavaScript is a programming language used to create application logic and functionality, while JSON, or JavaScript Object Notation, is a text-based data format used to represent and exchange information. Although JSON syntax resembles JavaScript objects, JSON itself does not contain executable application logic.

JSON connects the frontend and backend of the Travlr application by providing a common format for transferring data through the REST API. For example, when the Angular SPA sends a GET request for trip information, the Express API retrieves the information from MongoDB and returns the trip data as JSON. Angular can then use that information to populate its components. When an administrator updates a trip, the updated information can also be sent to the backend through the API and processed before being stored in MongoDB.

Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

Refactoring occurred throughout development as the application moved from static content toward a complete full stack architecture. Trip information that was initially represented as static data was moved into MongoDB and accessed through reusable API endpoints. Application logic was also separated into routes, controllers, models, services, and Angular components instead of placing all functionality in a single location. This improved organization and made individual parts of the application easier to test, modify, and maintain.

Reusable Angular UI components also improved efficiency by allowing functionality to be separated into independent pieces. For example, trip-related components can display or modify trip information without recreating the entire user interface. Reusable components reduce duplicate code, provide consistency throughout the application, simplify debugging, and make future changes easier because updates can be made to a component once and reflected wherever that component is used.

Testing

Explain your understanding of methods, endpoints, and security in a full stack application.

HTTP methods define the type of action that a client requests from an API. In the Travlr application, GET requests are used to retrieve trip information, while POST and PUT requests can be used to create and update data. API endpoints specify the location where these requests are sent, such as /api/trips for accessing trip records or an endpoint containing a specific trip code for working with an individual record.

Testing these endpoints was an important part of confirming communication between the different layers of the application. API requests can be tested independently to verify the status codes and JSON responses returned by the server. The Angular SPA can then be tested to ensure that it sends the correct requests and properly displays the responses. PUT requests can be tested by modifying a trip through the administrative interface and confirming that the updated information is persisted in MongoDB.

Security adds another layer to the testing process because some functionality should only be accessible to authenticated users. Authentication and authorization must be tested along with the API to ensure that protected administrative operations cannot be performed without valid credentials. Testing both successful and unsuccessful requests helps verify that endpoints function correctly while still protecting restricted application functionality and data.

Reflection

How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This course helped me better understand how the individual technologies used in software development work together to create a complete application. Rather than focusing only on frontend or backend development, I gained experience connecting an Angular SPA, Express and Node.js server, REST API, and MongoDB database into a functioning full stack application. Building the Travlr application strengthened my understanding of the MEAN stack and gave me practical experience with the architecture of modern web applications.

I also developed stronger skills in API development and testing, database integration, Angular components and services, routing, authentication, debugging, and troubleshooting communication between application layers. One of the most valuable skills I developed was learning how to identify problems across the full stack instead of looking at each technology independently. These skills will help me become a more marketable software development candidate because I can better understand how frontend interfaces, backend services, APIs, databases, and security work together throughout the software development process.
