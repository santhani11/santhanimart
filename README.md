# SanthaniMart

## Online Shopping Marketplace

SanthaniMart is a full-stack e-commerce marketplace developed using Java, Spring Boot, MySQL, HTML, CSS, and JavaScript.

The application allows users to register and log in, browse products, add products to a shopping cart, manage cart quantities, place orders, and view their order history.

The project is inspired by modern e-commerce platforms such as Amazon and Flipkart.

---

## Project Objective

The main objective of SanthaniMart is to develop a simple and user-friendly online shopping marketplace where users can:

- Register and log in
- Browse available products
- View product details
- Add products to the cart
- Update cart quantities
- Remove products from the cart
- Checkout and place orders
- View order history

The application also provides product management functionality for authorized users.

---

## Main Features

### User Authentication

- User registration
- User login
- User logout
- Session information stored using browser local storage

### Product Management

- View available products
- View product details
- Add new products
- Delete products
- Display product price
- Display product category
- Display available stock
- Product image support

### Shopping Cart

Users can:

- Add products to cart
- Increase product quantity
- Remove products from cart
- View total price
- Manage cart items

### Stock Management

SanthaniMart maintains product stock during cart operations.

When a product is added to the cart:

`Stock → Decreases`

When a product is removed from the cart:

`Stock → Restored`

This helps maintain correct product availability.

### Checkout and Orders

Users can:

- Review cart items
- Confirm an order
- Place an order
- View their order history

### Categories

Products can be organized according to categories such as:

- Electronics
- Fashion
- Home

---

## Application Workflow

```text
                    SanthaniMart
                         |
              +----------+----------+
              |                     |
            User                 Products
              |                     |
        Register / Login       View Products
              |                     |
              ↓                     ↓
          Home Page            Add to Cart
                                    |
                                    ↓
                              Shopping Cart
                                    |
                                    ↓
                                 Checkout
                                    |
                                    ↓
                               Place Order
                                    |
                                    ↓
                              Order History
````

---

## System Architecture

SanthaniMart follows a layered backend architecture.

```text
Frontend
HTML + CSS + JavaScript
          |
          ↓
Spring Boot REST API
          |
          ↓
Controller Layer
          |
          ↓
Repository Layer
          |
          ↓
MySQL Database
```

### Controller Layer

Handles HTTP requests from the frontend and provides REST API endpoints.

### Repository Layer

Handles communication between the application and the MySQL database using Spring Data JPA.

### Model Layer

Represents application entities such as users and products.

---

## Technology Stack

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Java
* Spring Boot
* Spring Data JPA

### Database

* MySQL

### Build Tool

* Maven Wrapper

### Version Control

* Git
* GitHub

---

## Project Structure

```text
SanthaniMart/
│
├── backend/
│   └── santhani-mart/
│       ├── src/
│       │   └── main/
│       │       ├── java/
│       │       │   └── com/
│       │       │       └── santhanimart/
│       │       │           ├── controller/
│       │       │           ├── repository/
│       │       │           └── model/
│       │       │
│       │       └── resources/
│       │
│       ├── .mvn/
│       ├── mvnw
│       ├── mvnw.cmd
│       └── pom.xml
│
├── frontend/
│   ├── css/
│   ├── js/
│   └── pages/
│
└── README.md
```

---

## Database

SanthaniMart uses MySQL for persistent application data.

### Current Database

```text
Database: santhanimart
```

### Main Data

* Users
* Products
* Orders
* Order Items

The database is connected to the Spring Boot backend using Spring Data JPA.

---

## API Endpoints

### Authentication

```text
POST /api/auth/register
POST /api/auth/login
```

### Products

```text
GET    /api/products
GET    /api/products/{id}
POST   /api/products
DELETE /api/products/{id}
```

### Stock Management

```text
PUT /api/products/{id}/decrease-stock
PUT /api/products/{id}/increase-stock
```

### Orders

```text
GET /api/orders/{email}
```

---

## Security

The application includes basic user authentication.

Security considerations include:

* User authentication
* Restricted product-management functionality
* Database-backed user accounts
* API access control
* Validation of user inputs
* Protection of sensitive configuration values
* No database passwords or secrets should be committed to the public repository

---

## Deployment

SanthaniMart is deployed as part of the project submission.

### Public URL

```text
[ADD DEPLOYED URL HERE]
```

The deployed application should be tested for:

* User registration
* Login
* Product viewing
* Cart operations
* Checkout
* Order history
* Backend API connectivity

---

## Testing

The project is tested for important application workflows including:

* User registration
* User login
* Product loading
* Add to cart
* Cart quantity update
* Stock decrease
* Cart item removal
* Stock restoration
* Order placement
* Order history

---

## CI Tests

Continuous Integration is used to automatically build and test the backend whenever changes are pushed to the repository.

---

## Screenshots

Screenshots of the working application are included in the project documentation.

### Home Page

Add screenshot here.

### Login / Register

Add screenshot here.

### Products

Add screenshot here.

### Categories

Add screenshot here.

### Shopping Cart

Add screenshot here.

### Orders

Add screenshot here.

### Deployed Application

Add screenshot here.

---

## Future Enhancements

Possible future improvements include:

* Wishlist
* Advanced search
* Advanced category filtering
* Product reviews and ratings
* Order tracking
* Seller dashboard
* Admin dashboard
* Sales analytics
* AI chatbot
* Online payment gateway

---