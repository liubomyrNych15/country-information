# Country Information

## Description

Country Info App is a back-end application built with Express.js, TypeScript, and PostgreSQL (using TypeORM). It integrates with external APIs to provide information about countries and allows users to add national holidays to their calendars.


## Features

- **Get Available Countries:**  
  Retrieve a list of available countries using the Nager.Date API.

- **Get Country Info:**  
  Fetch detailed information about a specific country, including:
  - List of border countries
  - Historical population data (suitable for charts)
  - Country flag image URL

- **Add National Holidays to Calendar:**  
  Allows users to add selected national holidays to their calendar. Integrates with the Nager.Date API to fetch holiday data.


## Technologies Used

- **Backend Framework:** Express.js  
- **Language:** TypeScript  
- **Database:** PostgreSQL with TypeORM  
- **External APIs:**  
  - [Nager.Date API](https://date.nager.at/swagger/index.html) for available countries, public holidays, and country information  
  - [CountriesNow API](https://documenter.getpostman.com/view/1134062/T1LJjU52) for historical population data and flag images
- **Tools:**  
  - ESLint for linting (configured using [ESLint Flat Config](https://eslint.org/docs/latest/use/configure/migration-guide))
  - Prettier for code formatting


## Setup Instructions

1. **Clone the Repository:**
  git clone <https://github.com/liubomyrNych15/country-information.git>
  cd country-information

2. **Install Dependencies:**
```bash
  npm install
```

3. **Create and Configure the .env File: Create a file named .env in the root directory with content similar to:**
```bash
  PORT=8080

  # PostgreSQL Database Configuration
  DB_HOST=localhost
  DB_PORT=5432
  DB_USERNAME=your_username
  DB_PASSWORD=your_password
  DB_DATABASE=countryinfoapp

  # External API Base URLs
  NAGER_BASE_URL=https://date.nager.at/api/v3
  COUNTRIES_NOW_BASE_URL=https://countriesnow.space/api/v0.1
```

4. **Run the Development Server**
```bash
  npm run dev
```


## Code Quality

-ESLint and Prettier are configured to enforce code quality and consistency. Refer to the configuration files .prettierrc and eslint.config.js for details.