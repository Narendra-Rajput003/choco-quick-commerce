# Choco Commerce

A comprehensive e-commerce platform built with Next.js, Drizzle ORM, NextAuth, Cryptomus, Zustand, and Zod.  This project features admin and customer roles, crypto payment acceptance, and robust data management.

## Features

* **Next.js:**  Framework for building user interfaces.
* **Drizzle ORM:**  Type-safe database ORM for PostgreSQL.
* **NextAuth:**  Authentication solution for user management.
* **Cryptomus:**  Cryptocurrency payment gateway integration.
* **Zustand:**  State management solution.
* **Zod:**  Schema validation library.
* **Admin and Customer Roles:**  Separate interfaces and permissions for administrators and customers.
* **Crypto Payment Acceptance:**  Secure processing of cryptocurrency payments.
* **Warehouses, Inventories, Products:**  Comprehensive management of inventory and product information.
* **Robust Data Validation:**  Ensuring data integrity with Zod schemas.

## Technologies Used

* Next.js
* Drizzle ORM
* NextAuth.js
* Cryptomus
* Zustand
* Zod
* PostgreSQL (database)
* Tailwind CSS (styling)

## Setup

1. **Clone the repository:**
   ```bash
   git clone [repository_url]
   ```
2. **Install dependencies:**
   ```bash
   cd choco
   npm install
   ```
3. **Set up environment variables:** Create a `.env` file based on the `.env.example` file, providing necessary API keys and database credentials.
4. **Run database migrations:**
   ```bash
   npm run db:generate
   npm run db:run
   ```
5. **Start the development server:**
   ```bash
   npm run dev
   ```

## Running the Project

1.  **Ensure Dependencies are Installed:** Make sure you have Node.js and npm (or yarn) installed on your system.
2.  **Environment Variables:**  Create a `.env` file in the root directory of the project.  Copy the contents from `.env.example` and fill in the required values for your database connection and any API keys.
3.  **Database Setup:**
    *   **Generate Schema:** Run `npm run db:generate` to generate the database schema based on your Drizzle ORM configuration.
    *   **Run Migrations:** Run `npm run db:run` to apply any pending database migrations.  This will create the necessary tables in your PostgreSQL database.
4.  **Start Development Server:** Run `npm run dev` to start the Next.js development server.  This will launch the application in your browser.

## Usage

This project provides separate interfaces for administrators and customers.  The admin panel allows for managing products, inventories, warehouses, orders, and delivery persons.  Customers can browse products, add items to their cart, and checkout using cryptocurrency.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

[Specify License]
