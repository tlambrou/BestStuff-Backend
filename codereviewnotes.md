# Code Review
- User Experience
    + Contests view
        * Mobile reponsive not working
        * Elements are too big? 
        * Add Contests at the top
        * Brand in the navbar? Disappears for login page
        * Map on contests? Asked us to take it out...
        * Populate new contest to the top
        * Make the whole UI more information dense (1,000,000,000x more)
            - Entries
            - Votes
            - Top winner
    + Singular Contest
        * Button is too long
        * Name an place already in place
        * V nice voting
        * Needs a back-to-home
        * Contest should have a # associated w/ it
        * Creating an item votes on it
    + I can vote when I'm not logged in
    + Logout breaks like a mfer
- Backend
    + Do not need Sequelize connection check in production
    + Change DB names
        * Best practice: -dev, -test, -prod
    + Might need a start script and/or Procfile for deployment
    + Models
        * Adopt the JS style for models
- Sequelize Tomfoolery
    + The white whale - creating the Vote assocation

