/**
 * Contains the miscellaneous route handlers.
 * @author Favour Markson <https://github.com/Markson17>
 */

class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
