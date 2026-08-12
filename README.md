### SanthaniMart
Online Shopping Marketplace

SanthaniMart is a full-stack online shopping marketplace application inspired by popular e-commerce platforms such as Amazon and Flipkart. The application provides a platform where buyers can browse and purchase products, sellers can manage their products, and administrators can manage the overall marketplace.

The project is designed as a multi-role e-commerce system with separate functionalities for Buyer, Seller, and Admin.

## Project Objective

The main objective of SanthaniMart is to develop an easy-to-use online marketplace where:

Buyers can register, log in, search for products, add products to their cart, and place orders.
Sellers can register, log in, add products, edit products, and delete products.
Admins can manage users, orders, and inappropriate products.
Buyers can view their order history and provide product reviews.
## User Roles
1. Buyer

A Buyer can:

Register an account
Log in
View available products
Search for products
Filter products by category
Add products to the shopping cart
Remove products from the cart
Update product quantity
View the total price
Checkout and confirm an order
View order history
Give product ratings and comments
2. Seller

A Seller can:

Register an account
Log in
Add new products
Edit existing products
Delete products
View orders received for their products
3. Admin

The Admin manages the marketplace and can:

View all registered users
View all orders
Remove inappropriate products
## Application Workflow
                         SanthaniMart
                              |
              +---------------+---------------+
              |               |               |
            Buyer           Seller           Admin
              |               |               |
              ↓               ↓               ↓
        Search Products   Add Products    Manage Users
              |           Edit Products   View Orders
              ↓           Delete Products Remove Products
        View Products     View Orders
              |
              ↓
         Add to Cart
              |
              ↓
          Checkout
              |
              ↓
        Confirm Order
              |
              ↓
        Order History
              |
              ↓
       Product Review
## Main Features
User Registration & Login

Buyers and sellers can create accounts and log in to the application. The system identifies the user's role and provides access to the appropriate dashboard.

Product Management

Sellers can add, edit, and delete products from the marketplace.

Product Search

Buyers can search for products using the product name.

Category Filtering

Buyers can filter products based on their category.

Shopping Cart

Buyers can add products to the cart, remove products, update quantities, and view the total price.

Checkout

Buyers can review their cart and confirm their order. No real payment gateway is required.

Order History

Buyers can view their previous orders and their order status. Sellers can view orders received for their products.

## Admin Management

The administrator can view users and orders and remove inappropriate products.

Product Reviews

Buyers can provide ratings and comments for products.

## System Architecture

SanthaniMart follows a layered application architecture:

## Frontend
HTML + CSS + JavaScript
          ↓
Spring Boot Controller
          ↓
Service Layer
          ↓
Repository Layer
          ↓
MySQL Database
Controller Layer

Handles incoming requests from the frontend and sends appropriate responses.

Service Layer

Contains the main business logic of the application.

Repository Layer

Handles communication between the application and the database.

Model Layer

Represents the entities and data used by the application.

## Technology Stack
Backend
Java
Spring Boot
Spring Data JPA
Frontend
HTML
CSS
JavaScript
Database
MySQL
Build Tool
Maven Wrapper
Version Control
Git
GitHub
## Project Structure
SanthaniMart/
│
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── santhanimart/
│   │   │           ├── controller/
│   │   │           ├── service/
│   │   │           ├── repository/
│   │   │           ├── model/
│   │   │           └── config/
│   │   │
│   │   └── resources/
│   │       ├── static/
│   │       │   ├── css/
│   │       │   ├── js/
│   │       │   └── images/
│   │       │
│   │       ├── templates/
│   │       └── application.properties
│
├── .mvn/
├── mvnw
├── mvnw.cmd
├── pom.xml
└── README.md
## Database

The application uses MySQL to store and manage marketplace data.

The planned database entities include:

Users
Products
Categories
Cart
Cart Items
Orders
Order Items
Reviews

The Users entity supports three roles:

BUYER
SELLER
ADMIN
## Security

The application will include basic authentication and role-based access so that users can access the features appropriate to their role.

For example:

BUYER  → Buyer Features
SELLER → Seller Features
ADMIN  → Admin Features
## Future Enhancements

After completing the core marketplace features, additional features can be added, such as:

Wishlist
Order Tracking
Sales Dashboard
AI Chatbot
Online Deployment